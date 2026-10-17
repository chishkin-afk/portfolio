import { SectionLabel } from "@/shared/ui/section-label/section-label";
import { services } from "../../model/services";
import { ServiceItem } from "../service-item/service-item";
import styles from "./features.module.scss";

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
      <div className={styles.about}>
        <SectionLabel index="02">Подход к работе</SectionLabel>
        <div className={styles.copy}>
          <h2 id="about-title">
            От идеи —<br />
            до последнего пикселя<span>.</span>
          </h2>
          <div className={styles.description}>
            <p>
              Привет, я Егор Чишкин, веб-разработчик. Вместе с командой создаю
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
      <div className={styles.stack}>
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
