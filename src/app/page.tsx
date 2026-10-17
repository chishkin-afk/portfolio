import { HomePage } from "@/views/home/ui/home-page/home-page";
import { site } from "@/shared/config/site";
import { pageMetadata } from "@/shared/lib/seo/page-metadata";
import { siteEntities } from "@/shared/lib/seo/site-entities";

export const metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...siteEntities,
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      inLanguage: "ru-RU",
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#service` },
    },
    {
      "@type": "Service",
      "@id": `${site.url}/#service`,
      name: "Разработка сайтов под ключ",
      description: site.description,
      url: `${site.url}/#about`,
      serviceType: [
        "Веб-дизайн",
        "Разработка лендингов и корпоративных сайтов",
        "Разработка многостраничных сайтов",
        "Разработка веб-приложений",
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
