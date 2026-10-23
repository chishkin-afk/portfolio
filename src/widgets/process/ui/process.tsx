import { SectionHeading } from "@/src/shared/ui/section-heading";
import { Arrow } from "@/src/shared/ui/arrow";
import { steps } from "../model/content";
import "./process.css";

export function Process() {
  return <section id="process" className="process section wrap" data-scene="process">
    <SectionHeading number="04" label="Как всё устроено" note={<>На каждом этапе<br />мы на связи.</>}>Четыре шага.<br /><span className="muted">Один понятный путь.</span></SectionHeading>
    <div className="process-track" aria-hidden="true"><span data-scroll="line" /></div>
    <div className="process-grid">{steps.map(([number, title, text, caption]) => <article className="process-step" key={number} data-reveal><div className="step-number">{number}<Arrow /></div><h3>{title}</h3><p>{text}</p><span className="step-caption">{caption}</span></article>)}</div>
  </section>;
}
