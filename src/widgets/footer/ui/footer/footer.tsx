import { contacts } from "@/shared/config/contacts";
import { Arrow } from "@/shared/ui/arrow/arrow";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#home" className={styles.brand}>
        chishkin.
      </a>
      <span className={styles.copyright}>© 2026 Егор Чишкин</span>
      <nav aria-label="Контакты и социальные сети">
        <a href={contacts.emailHref}>
          Почта <Arrow />
        </a>
        <a href={contacts.telegram} target="_blank" rel="noopener noreferrer">
          Telegram <Arrow />
        </a>
        <a href={contacts.github} target="_blank" rel="noopener noreferrer">
          GitHub <Arrow />
        </a>
      </nav>
      <a href="#home" className={styles.up} aria-label="Вернуться наверх">
        ↑
      </a>
    </footer>
  );
}
