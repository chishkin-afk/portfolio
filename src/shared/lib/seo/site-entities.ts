import { site } from "@/shared/config/site";

export const siteEntities = [
  {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    inLanguage: "ru-RU",
  },
];
