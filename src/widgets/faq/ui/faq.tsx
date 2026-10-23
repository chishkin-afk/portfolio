import { Accordion } from "@/src/shared/ui/accordion";
import { SectionLabel } from "@/src/shared/ui/section-heading";
import { Arrow } from "@/src/shared/ui/arrow";
import { profile } from "@/src/entities/profile";
import { faqs } from "../model/content";
import "./faq.css";

export function Faq() {
  return <section id="faq" className="faq section wrap" data-scene="faq"><div className="faq-heading"><SectionLabel number="05">На всякий случай</SectionLabel><div data-scroll="rise"><h2 data-reveal>Хорошие<br /><span className="muted">вопросы.</span></h2><p data-reveal>Не нашли свой?</p><a className="text-link" href={profile.telegram} target="_blank" rel="noreferrer" data-reveal>Просто напишите мне <Arrow /></a></div></div><Accordion items={faqs} /></section>;
}
