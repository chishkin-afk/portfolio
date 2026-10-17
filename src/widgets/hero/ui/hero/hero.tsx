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
      <div className={styles.topline}>
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
      <div className={styles.stage}>
        <h1 className={styles.title} id="hero-title" ref={titleRef}>
          CHISHKIN
          <span className="sr-only">
            {" "}
            — Егор Чишкин, разработка сайтов и веб-приложений
          </span>
        </h1>
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
      <div className={styles.bottomline}>
        <div>
          <p className={styles.intro}>
            Создание сайтов на заказ
            <br />под ключ.
          </p>
          <p className={styles.description}>
            Лендинги, сайты для бизнеса и веб-приложения.
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
      <div className={styles.footnote}>
        <span>ПОРТФОЛИО / 2026</span>
        <span>ОТ ПЕРВОЙ ИДЕИ ДО ЗАПУСКА В СЕТЬ</span>
        <span>01 — 05</span>
      </div>
    </section>
  );
}
