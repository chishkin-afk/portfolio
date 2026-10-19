import { Arrow } from "@/shared/ui/arrow/arrow";
import { contacts } from "@/shared/config/contacts";
import styles from "./header.module.scss";

export function Header({ homePage = true }: { homePage?: boolean }) {
  const home = homePage ? "" : "/";
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skip}>
        К содержимому
      </a>
      <a
        href={`${home}#home`}
        className={styles.brand}
        aria-label="На главную"
      >
        <span className={styles.mark}>✳</span> chishkin
        <span className={styles.dot}>.</span>
      </a>
      <nav aria-label="Основная навигация" className={styles.nav}>
        <a href={`${home}#about`}>Подход</a>
        <a href={`${home}#services`}>Услуги</a>
        <a href={`${home}#projects`}>Проекты</a>
        <a href={`${home}#timeline`}>Цены и сроки</a>
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
