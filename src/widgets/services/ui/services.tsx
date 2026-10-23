import { SectionHeading } from "@/src/shared/ui/section-heading";
import { Arrow } from "@/src/shared/ui/arrow";
import { profile } from "@/src/entities/profile";
import { services } from "../model/content";
import { ServiceCard } from "./service-card";
import "./services.css";

export function Services() {
  return <section id="services" className="services section wrap" data-scene="services">
    <SectionHeading number="03" label="Чем могу помочь" note={<>Задачи разные.<br />Внимание — одинаковое.</>}>От первого сайта<br /><span className="muted">до большой идеи.</span></SectionHeading>
    <div className="services-grid">{services.map((service, index) => <ServiceCard key={service.n} service={service} index={index} />)}</div>
    <div className="support-row" data-reveal><div><h3>А после запуска?</h3><p>Обновления, новые функции и забота о сайте.</p></div><a className="text-link" href={profile.telegram} target="_blank" rel="noreferrer">Поддержка от 5 000 ₽ / месяц <Arrow /></a></div>
    <p className="pricing-note" data-reveal>Точная стоимость и сроки — после знакомства с задачей. Без сюрпризов в процессе.</p>
  </section>;
}
