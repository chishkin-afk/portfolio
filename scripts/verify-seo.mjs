import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Проверяем HTML production-сборки, который получит робот без выполнения JS.
const build = join(process.cwd(), ".next/server/app");
const origin = "https://echishkin.ru";
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
const text = (html) => decode(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
}
function tags(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, "g"))].map(([value]) => attributes(value));
}

const sitemap = readFileSync(join(build, "sitemap.xml.body"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, value]) => new URL(decode(value)));
assert.ok(urls.length > 1, "Sitemap должен включать страницы услуг");
assert.equal(new Set(urls.map((url) => url.href)).size, urls.length, "Повторы в sitemap");
const pages = new Map();
for (const url of urls) {
  assert.equal(url.origin, origin, "Посторонний домен в sitemap");
  assert.equal(url.hash + url.search, "", "Sitemap не должен включать якоря и параметры");
  const path = url.pathname;
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  pages.set(path, readFileSync(join(build, file), "utf8"));
}

const titles = new Set();
const descriptions = new Set();
const links = new Map();
for (const [path, html] of pages) {
  const meta = tags(html, "meta");
  const get = (name) => meta.find((item) => item.name === name || item.property === name)?.content;
  const title = text(html.match(/<title>(.*?)<\/title>/s)?.[1] || "");
  const description = get("description");
  assert.ok(title && description, `${path}: нет title / description`);
  assert.ok(!titles.has(title), `${path}: повтор title`);
  assert.ok(!descriptions.has(description), `${path}: повтор description`);
  titles.add(title);
  descriptions.add(description);
  const headings = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)].map(([, value]) => text(value));
  assert.equal(headings.length, 1, `${path}: нужен один содержательный H1`);
  assert.match(headings[0], /Разработка/, `${path}: H1 не описывает услугу`);
  const canonical = tags(html, "link").filter(({ rel }) => rel === "canonical");
  assert.equal(canonical.length, 1, `${path}: нужен один canonical`);
  const expected = new URL(path, origin).href;
  assert.equal(new URL(canonical[0].href).href, expected, `${path}: неверный canonical`);
  assert.equal(new URL(get("og:url")).href, expected, `${path}: неверный og:url`);
  assert.equal(get("og:title"), title, `${path}: расходятся title и og:title`);
  assert.equal(get("og:description"), description);
  assert.equal(get("twitter:card"), "summary_large_image");
  assert.equal(get("twitter:image"), get("og:image"));
  assert.match(get("og:image"), /^https:\/\/echishkin\.ru\/opengraph-image\.png/);
  assert.match(get("robots"), /index, follow/);
  for (const item of meta.filter(({ name }) => name === "robots" || name === "googlebot")) {
    assert.doesNotMatch(item.content, /noindex|nofollow/, `${path}: запрещена индексация`);
  }
  if (get("google-site-verification")) {
    assert.doesNotMatch(get("google-site-verification"), /^google-site-verification=/, "В HTML попала TXT-строка DNS");
  }
  assert.ok(tags(html, "link").some(({ rel, as }) => rel === "preload" && as === "font"), "Нет предзагрузки локального шрифта");

  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  assert.ok(json, `${path}: нет JSON-LD в исходном HTML`);
  const data = JSON.parse(json);
  assert.equal(data["@context"], "https://schema.org");
  const graph = data["@graph"];
  const ids = new Set(graph.map((item) => item["@id"]));
  assert.equal(ids.size, graph.length, `${path}: повтор @id`);
  function checkReferences(value) {
    if (!value || typeof value !== "object") return;
    if (value["@id"]) assert.ok(ids.has(value["@id"]), `${path}: неразрешённая ссылка JSON-LD ${value["@id"]}`);
    Object.values(value).forEach(checkReferences);
  }
  checkReferences(graph);
  assert.equal(new URL(graph.find((item) => item["@type"] === "WebPage").url).href, expected);
  assert.ok(graph.some((item) => item["@type"] === "WebSite" && item.name === "CHISHKIN"));
  if (path !== "/") {
    assert.ok(graph.some((item) => item["@type"] === "Service" && item.name === headings[0]));
    assert.ok(graph.some((item) => item["@type"] === "BreadcrumbList"));
  }
  assert.ok(tags(html, "details").length > 0, `${path}: ответы на вопросы отсутствуют в HTML`);
  links.set(path, tags(html, "a").filter(({ href }) => href).map(({ href }) => new URL(href, new URL(path, origin))));
  console.log(`OK ${path}: ${title}`);
}

for (const [path, targets] of links) {
  for (const url of targets.filter((url) => url.origin === origin)) {
    assert.ok(pages.has(url.pathname), `${path}: внутренняя ссылка вне опубликованных страниц ${url.pathname}`);
    if (url.hash) {
      const id = decodeURIComponent(url.hash.slice(1));
      assert.ok(pages.get(url.pathname).includes(`id="${id}"`), `${path}: отсутствует якорь ${url.href}`);
    }
  }
}
const reachable = new Set(["/"]);
for (const path of reachable) {
  for (const url of links.get(path)) {
    if (url.origin === origin) reachable.add(url.pathname);
  }
}
assert.equal(reachable.size, pages.size, "Не все страницы доступны по ссылкам с главной");
const robots = readFileSync(join(build, "robots.txt.body"), "utf8");
assert.match(robots, /User-Agent: \*\nAllow: \//);
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.doesNotMatch(robots, /Disallow: \/\s*$/m);
const notFound = readFileSync(join(build, "_not-found.html"), "utf8");
assert.match(notFound, /name="robots" content="noindex"/);
assert.match(notFound, /Здесь пока ничего/);
assert.ok(tags(notFound, "a").some(({ href }) => href === "/"), "На 404 нет ссылки на главную");
const image = readFileSync(join(build, "opengraph-image.png.body"));
assert.equal(image.readUInt32BE(16), 1200);
assert.equal(image.readUInt32BE(20), 630);
console.log(`SEO checks passed: ${pages.size} static pages, unique metadata, canonical, links/anchors, JSON-LD, sitemap, robots, OG image and 404 noindex.`);
