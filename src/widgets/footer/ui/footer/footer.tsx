import { contacts } from "@/shared/config/contacts";
import { Arrow } from "@/shared/ui/arrow/arrow";
import styles from "./footer.module.scss";

export function Footer({ homePage = true }: { homePage?: boolean }) {
  const home = homePage ? "" : "/";
  return (
    <footer className={styles.footer}>
      <a href={`${home}#home`} className={styles.brand}>
        chishkin.
      </a>
      <span className={styles.copyright}>© 2026 CHISHKIN</span>
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
      <a href={homePage ? "#home" : "#main"} className={styles.up} aria-label="Вернуться наверх">
        ↑
      </a>
    </footer>
  );
}
