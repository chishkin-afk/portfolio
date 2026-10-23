import { Arrow } from "@/src/shared/ui/arrow";
import { profile } from "@/src/entities/profile";
import type { services } from "../model/content";

export function ServiceCard({ service, index }: { service: (typeof services)[number]; index: number }) {
  return <div className="service-shell" data-reveal><article className="service-card" data-scroll="fall" data-amount={index % 2 ? 1 : -1}>
    <div className="service-top"><span>/{service.n}</span><span className="service-time">{service.time}</span></div>
    <div className={`service-symbol service-symbol--${service.n}`} aria-hidden="true">{service.n === "01" ? <div className="symbol-page"><i /><i /><i /></div> : service.n === "02" ? <div className="symbol-columns"><i /><i /><i /></div> : service.n === "03" ? <div className="symbol-bag"><i /><span>+</span></div> : <span className="symbol-code">{ "{ · }" }</span>}</div>
    <h3>{service.title}</h3><p>{service.description}</p>
    <div className="service-footer"><span>{service.price}</span><a className="icon-button" href={`${profile.telegram}?text=${encodeURIComponent(`Привет! Хочу обсудить ${service.title.toLowerCase()}.`)}`} target="_blank" rel="noreferrer" aria-label={`Обсудить: ${service.title}`}><Arrow /></a></div>
  </article></div>;
}
