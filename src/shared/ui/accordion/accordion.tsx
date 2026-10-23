"use client";

import { useId, useState } from "react";
import "./accordion.css";

export function Accordion({ items }: { items: readonly (readonly string[])[] }) {
  const [opened, setOpened] = useState<number | null>(null);
  const id = useId();
  return <div className="accordion">{items.map(([question, answer], index) => {
    const open = opened === index;
    const triggerId = `${id}-trigger-${index}`;
    const panelId = `${id}-panel-${index}`;
    return <div className="accordion-item" key={question} data-open={open} data-reveal>
      <h3><button id={triggerId} aria-expanded={open} aria-controls={panelId} onClick={() => setOpened(open ? null : index)}><span className="accordion-number">0{index + 1}</span><span>{question}</span><span className="accordion-plus" aria-hidden="true" /></button></h3>
      <div id={panelId} className="accordion-panel" role="region" aria-labelledby={triggerId} aria-hidden={!open} inert={!open}><div className="accordion-clip"><p>{answer}</p></div></div>
    </div>;
  })}</div>;
}
