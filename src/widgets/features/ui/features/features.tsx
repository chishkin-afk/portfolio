import { SectionLabel } from "@/shared/ui/section-label/section-label";
import { services } from "../../model/services";
import { ServiceItem } from "../service-item/service-item";
import styles from "./features.module.scss";
import Link from "next/link";
import { servicePages, servicePath } from "@/entities/service/model/services";
import { Arrow } from "@/shared/ui/arrow/arrow";

export function Features() {
  return (
    <section
      className={styles.section}
      id="about"
      aria-labelledby="about-title"
    >
      <div className={styles.services}>
        {services.map((service) => (
          <ServiceItem key={service.number} {...service} />
        ))}
      </div>
      <div className={styles.about} data-reveal>
        <SectionLabel index="02">Подход к работе</SectionLabel>
        <div className={styles.copy}>
          <h2 id="about-title">
            От идеи —<br />
            до последнего пикселя<span>.</span>
          </h2>
          <div className={styles.description}>
            <p>
              Я Егор, веб-разработчик. Вместе с командой создаю
              сайты на заказ: лендинги, корпоративные и многостраничные сайты,
              веб-приложения. Берём на себя дизайн, разработку и запуск под ключ.
            </p>
            <p>
              Работаю напрямую: вместе обсуждаем задачу, выбираем подход и
              двигаемся к запуску. Вы всегда знаете, на каком этапе ваш проект.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.offers} id="services">
        <h2>Что можно заказать</h2>
        <div className={styles.offerList}>
          {servicePages.map((service) => (
            <Link key={service.slug} href={servicePath(service.slug)} className={styles.offer} data-reveal>
              <h3>{service.name}<Arrow /></h3>
              <p>{service.summary}</p>
              <span>Подробнее об услуге</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.stack} data-reveal>
        <span>МОИ ИНСТРУМЕНТЫ</span>
        <div>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>React</span>
          <span>Golang</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}
