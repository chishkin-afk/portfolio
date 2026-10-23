import type { ReactNode } from "react";

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-label" data-reveal><span aria-hidden="true">+</span><span>{children}</span><span className="section-index">({number})</span></div>;
}

export function SectionHeading({ number, label, children, note }: { number: string; label: string; children: ReactNode; note?: ReactNode }) {
  return <div className="section-heading"><SectionLabel number={number}>{label}</SectionLabel><div className="section-heading-row"><h2 data-reveal>{children}</h2>{note && <p data-reveal>{note}</p>}</div></div>;
}
