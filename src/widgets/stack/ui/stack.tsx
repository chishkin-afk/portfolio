"use client";

import { useState } from "react";
import "./stack.css";

const technologies = ["Golang", "React", "Next.js", "TypeScript"];

export function Stack() {
  const [paused, setPaused] = useState(false);
  return <section className="stack" aria-label="Мой стек технологий" data-scene="stack">
    <div className="stack-top wrap" data-reveal><span className="eyebrow">Инструменты, которым доверяю</span><button aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Продолжить" : "Пауза"}</button></div>
    <div className={`marquee${paused ? " is-paused" : ""}`} data-reveal><div className="marquee-track">{[0, 1].map((copy) => <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{technologies.map((tech) => <span key={tech}>{tech}<span className="marquee-star" data-scroll="rotate" aria-hidden="true">✳</span></span>)}</div>)}</div></div>
    <div className="stack-bottom wrap" data-reveal><span>Надёжно внутри.</span><span>Легко снаружи.</span></div>
  </section>;
}
