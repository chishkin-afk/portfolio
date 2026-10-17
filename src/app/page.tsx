import { HomePage } from "@/views/home/ui/home-page/home-page";
import { contacts } from "@/shared/config/contacts";
import { site } from "@/shared/config/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.author,
      url: `${site.url}/`,
      jobTitle: "Веб-разработчик",
      description: "Создаю сайты и веб-приложения под ключ вместе с командой.",
      email: contacts.email,
      sameAs: [contacts.telegram, contacts.github],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      alternateName: "Егор Чишкин — создание сайтов",
      description: site.description,
      inLanguage: "ru-RU",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      inLanguage: "ru-RU",
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#person` },
      mainEntity: { "@id": `${site.url}/#service` },
    },
    {
      "@type": "Service",
      "@id": `${site.url}/#service`,
      name: "Создание сайтов на заказ под ключ",
      description: site.description,
      url: `${site.url}/#about`,
      serviceType: [
        "Веб-дизайн",
        "Разработка лендингов и корпоративных сайтов",
        "Разработка многостраничных сайтов",
        "Разработка веб-приложений",
      ],
      provider: { "@id": `${site.url}/#person` },
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
