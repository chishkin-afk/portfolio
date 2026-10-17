import Image from "next/image";
import { Button } from "@/shared/ui/button/button";
import { Header } from "@/widgets/header/ui/header/header";
import { Footer } from "@/widgets/footer/ui/footer/footer";
import styles from "./not-found-page.module.scss";

export function NotFoundPage() {
  return (
    <>
      <Header homePage={false} />
      <main id="main" className={styles.main}>
        <div className={styles.topline}>
          <span>НЕ ТА СТРАНИЦА</span>
          <span>HTTP / 404</span>
        </div>
        <div className={styles.stage} aria-hidden="true">
          <p className={styles.code}>404</p>
          <Image
            className={styles.object}
            src="/images/chrome-asterisk.png"
            alt=""
            width={1024}
            height={1024}
            sizes="(max-width: 640px) 65vw, 36vw"
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.copy}>
            <h1>Здесь пока ничего<span>.</span></h1>
            <p>Возможно, ссылка устарела или в адресе опечатка.</p>
          </div>
          <div className={styles.actions}>
            <Button href="/">На главную</Button>
            <a className={styles.projects} href="/#projects">Смотреть проекты <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </main>
      <Footer homePage={false} />
    </>
  );
}
