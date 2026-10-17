import Link from "next/link";
import { servicePages, servicePath, type ServicePageData } from "@/entities/service/model/services";
import { estimates } from "@/features/project-estimate/model/estimates";
import { contacts } from "@/shared/config/contacts";
import { site } from "@/shared/config/site";
import { siteEntities } from "@/shared/lib/seo/site-entities";
import { Button } from "@/shared/ui/button/button";
import { Arrow } from "@/shared/ui/arrow/arrow";
import { Questions } from "@/shared/ui/questions/questions";
import { Header } from "@/widgets/header/ui/header/header";
import { Footer } from "@/widgets/footer/ui/footer/footer";
import styles from "./service-page.module.scss";

export function ServicePage({ service }: { service: ServicePageData }) {
  const url = `${site.url}${servicePath(service.slug)}`;
  const estimate = estimates.find(({ id }) => id === service.estimateId);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      ...siteEntities,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: service.title,
        description: service.description,
        inLanguage: "ru-RU",
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumbs` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        url,
        name: service.heading,
        serviceType: service.name,
        description: service.summary,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: service.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header homePage={false} />
      <main id="main" className={styles.main}>
        <article>
          <header className={styles.hero}>
            <nav aria-label="Хлебные крошки" className={styles.breadcrumbs}>
              <Link href="/">Главная</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.name}</span>
            </nav>
            <p className={styles.eyebrow}>ДИЗАЙН И РАЗРАБОТКА</p>
            <h1>{service.heading}</h1>
            <p className={styles.lead}>{service.summary}</p>
            <Button href={contacts.telegram}>Обсудить проект</Button>
          </header>
          <section className={styles.section} aria-labelledby="includes-title">
            <h2 id="includes-title">Что входит в разработку</h2>
            <div className={styles.grid}>
              {service.deliverables.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.section} aria-labelledby="estimate-title">
            <h2 id="estimate-title">Сроки и стоимость</h2>
            <div className={styles.copy}>
              {estimate ? (
                <p>
                  Ориентир — {estimate.duration} {estimate.unit} при готовом контенте.
                  Точный срок согласуем под задачу.
                </p>
              ) : null}
              <p>
                Стоимость зависит от объёма и функций. Расскажите о проекте — обсудим оценку.
              </p>
              <Link className={styles.textLink} href="/#projects">Посмотреть работу в портфолио →</Link>
            </div>
          </section>
        </article>
        <Questions items={service.questions} title="Вопросы об услуге" />
        <section className={styles.related} aria-labelledby="related-title">
          <h2 id="related-title">Другие форматы проектов</h2>
          <nav aria-label="Другие услуги">
            {servicePages.filter(({ slug }) => slug !== service.slug).map((item) => (
              <Link key={item.slug} href={servicePath(item.slug)}>
                {item.name}
                <span className={styles.relatedArrow}><Arrow /></span>
              </Link>
            ))}
          </nav>
        </section>
        <section className={styles.contact} aria-labelledby="service-contact-title">
          <div>
            <h2 id="service-contact-title">Обсудим вашу задачу?</h2>
            <p>Расскажите о проекте или задайте вопрос.</p>
          </div>
          <Button variant="outline" href={contacts.telegram}>Написать в Telegram</Button>
          <a href={contacts.emailHref}>{contacts.email}</a>
        </section>
      </main>
      <Footer homePage={false} />
    </>
  );
}
