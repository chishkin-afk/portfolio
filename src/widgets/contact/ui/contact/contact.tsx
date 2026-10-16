import { contacts } from "@/shared/config/contacts";
import { CopyEmailButton } from "@/features/copy-email/ui/copy-email-button/copy-email-button";
import { Arrow } from "@/shared/ui/arrow/arrow";
import { SectionLabel } from "@/shared/ui/section-label/section-label";
import styles from "./contact.module.scss";

export function Contact() {
  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className={styles.top}>
        <SectionLabel index="05">Следующий проект — ваш</SectionLabel>
        <span>НАЧНЁМ С ПРИВЕТА</span>
      </div>
      <a className={styles.heading} href={contacts.emailHref}>
        <h2 id="contact-title">
          Есть идея?
          <br />
          Давайте соберём<span>.</span>
        </h2>
        <Arrow />
      </a>
      <div className={styles.bottom}>
        <p>
          Расскажите, что хотите сделать.
          <br />
          Вместе найдём хорошее решение.
        </p>
        <CopyEmailButton email={contacts.email} />
        <a
          className={styles.telegram}
          href={contacts.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Или напишите в Telegram <Arrow />
        </a>
      </div>
    </section>
  );
}
