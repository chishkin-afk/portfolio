"use client";

import { Button } from "@/shared/ui/button/button";
import Image from "next/image";
import { useHeroParallax } from "../../lib/use-hero-parallax";
import styles from "./hero.module.scss";

export function Hero() {
  const { sectionRef, objectRef, titleRef } = useHeroParallax();
  return (
    <section
      className={styles.hero}
      id="home"
      ref={sectionRef}
      aria-labelledby="hero-title"
    >
      <div className={styles.topline} data-reveal>
        <p>
          НЕЗАВИСИМЫЙ
          <br />
          ВЕБ-РАЗРАБОТЧИК
        </p>
        <p className={styles.availability}>
          <span />
          Открыт к проектам
        </p>
        <p className={styles.edition}>
          ДИЗАЙН. КОД.
          <br />
          НИЧЕГО ЛИШНЕГО.
        </p>
      </div>
      <div className={styles.stage} data-reveal>
        <p className={styles.title} ref={titleRef} aria-hidden="true">
          CHISHKIN
        </p>
        <div className={styles.object} ref={objectRef}>
          <Image
            src="/images/chrome-asterisk.png"
            alt=""
            width={1024}
            height={1024}
            sizes="(max-width: 640px) 88vw, 48vw"
            preload
            className={styles.sculpture}
          />
        </div>
        <span className={styles.coordinate}>ДИЗАЙН × РАЗРАБОТКА</span>
        <span className={styles.objectLabel}>
          FORM FOLLOWS FUNCTION
          <br />
          DIGITAL CRAFT — VOL. 01
        </span>
      </div>
      <div className={styles.bottomline} data-reveal>
        <div>
          <h1 className={styles.intro} id="hero-title">
            Разработка сайтов
            <br />под ключ.
          </h1>
          <p className={styles.description}>
            Сайты на заказ и веб-приложения.
            <br />От дизайна до разработки и запуска.
          </p>
        </div>
        <div className={styles.actions}>
          <Button href="#projects">Смотреть проекты</Button>
          <a className={styles.scroll} href="#about">
            <span>Листайте вниз</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <div className={styles.footnote} data-reveal>
        <span>ПОРТФОЛИО / 2026</span>
        <span>ОТ ПЕРВОЙ ИДЕИ ДО ЗАПУСКА В СЕТЬ</span>
        <span>01 — 06</span>
      </div>
    </section>
  );
}
