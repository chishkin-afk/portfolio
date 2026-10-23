import { ElasticStar } from "@/src/features/elastic-star";
import { Arrow } from "@/src/shared/ui/arrow";
import { profile } from "@/src/entities/profile";
import "./hero.css";

export function Hero() {
  return <section className="hero wrap" aria-labelledby="hero-title" data-scene="hero">
    <div className="hero-topline" data-reveal><span className="eyebrow">Независимый разработчик</span><span className="availability"><i /> Открыт к проектам</span></div>
    <div className="hero-composition">
      <h1 id="hero-title" className="wordmark" data-reveal><span data-scroll="hero-left">chish</span><span data-scroll="hero-right">kin<span className="wordmark-dot">.</span></span><span className="sr-only"> — независимый разработчик сайтов</span></h1>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="hero-heading" data-reveal>Ваша идея. Мой код.<br /><span className="muted">Ничего лишнего.</span></p>
          <p className="hero-description" data-reveal>Сайты и веб-приложения без долгого ожидания. От первого «привет» до запуска — напрямую, со вниманием к каждой детали.</p>
          <div className="hero-actions" data-reveal><a className="button button-dark" href={profile.telegram} target="_blank" rel="noreferrer">Давайте сделаем <Arrow /></a><a className="text-link" href="#work">Смотреть проект <Arrow direction="down" /></a></div>
        </div>
        <div className="hero-art" data-scroll="hero-star"><ElasticStar /></div>
      </div>
    </div>
    <div className="hero-bottom" data-reveal><span>Дизайн · Разработка · Запуск</span><span>Неделя поддержки после запуска</span><a href="#about" aria-label="К следующей секции"><Arrow direction="down" /></a></div>
  </section>;
}
