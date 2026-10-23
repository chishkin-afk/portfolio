import { SectionHeading } from "@/src/shared/ui/section-heading";
import { Arrow } from "@/src/shared/ui/arrow";
import "./project.css";

export function Project() {
  return <section id="work" className="project section wrap" data-scene="project">
    <SectionHeading number="02" label="Избранный проект" note={<>От реальной задачи<br />к работающему продукту.</>}>Код, который<br /><span className="muted">работает на дело.</span></SectionHeading>
    <a className="project-card" href="https://wehicle.echishkin.ru" target="_blank" rel="noreferrer" data-reveal>
      <div className="project-meta"><span>CRM для автосервисов</span><span className="project-link-icon"><Arrow /></span></div>
      <div className="project-type" data-scroll="project"><span className="project-name">wehicle<span className="project-period">.</span></span><div className="project-rule" /></div>
      <div className="project-caption"><h3>Сложные процессы.<br /><span>Простая система.</span></h3><div><p>Веб-приложение для работы автосервиса.<br />От идеи до собственного продукта.</p><span className="text-link">Познакомиться с проектом <Arrow /></span></div></div>
    </a>
  </section>;
}
