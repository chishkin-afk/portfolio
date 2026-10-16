import { Arrow } from "@/shared/ui/arrow/arrow";
import { contacts } from "@/shared/config/contacts";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skip}>
        К содержимому
      </a>
      <a
        href="#home"
        className={styles.brand}
        aria-label="Егор Чишкин — на главную"
      >
        <span className={styles.mark}>✳</span> chishkin
        <span className={styles.dot}>.</span>
      </a>
      <nav aria-label="Основная навигация" className={styles.nav}>
        <a href="#about">Подход</a>
        <a href="#projects">Проекты</a>
        <a href="#timeline">Сроки</a>
      </nav>
      <a
        className={styles.contact}
        href={contacts.telegram}
        target="_blank"
        rel="noopener noreferrer"
      >
        Обсудить проект <Arrow />
      </a>
    </header>
  );
}
