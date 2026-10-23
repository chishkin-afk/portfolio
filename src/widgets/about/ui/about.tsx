import { SectionLabel } from "@/src/shared/ui/section-heading";
import { Arrow } from "@/src/shared/ui/arrow";
import "./about.css";

export function About() {
  return <section id="about" className="about section wrap" data-scene="about">
    <SectionLabel number="01">Простой подход</SectionLabel>
    <div className="about-content"><h2 data-reveal>Хороший сайт начинается<br /><span className="muted about-moving" data-scroll="slide">с понятного разговора.</span></h2>
      <div className="about-details"><p data-reveal>Я chishkin, независимый разработчик. Сам проектирую, пишу код и довожу до запуска. Со мной не нужно передавать идею через несколько человек.</p>
        <ul className="about-points">{["Все детали — до начала работы", "Прямая связь на каждом этапе", "Неделя поддержки после запуска"].map((text) => <li key={text} data-reveal><Arrow />{text}</li>)}</ul>
      </div>
    </div>
  </section>;
}
