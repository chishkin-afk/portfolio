"use client";

import { useEffect, useRef, useState } from "react";
import "./elastic-star.css";

const rays = Array.from({ length: 6 }, (_, i) => {
  const angle = (i * 60 - 90) * Math.PI / 180;
  return { x: Math.cos(angle), y: Math.sin(angle) };
});

export function ElasticStar() {
  const svg = useRef<SVGSVGElement>(null);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const springs = useRef(rays.map(() => ({ value: 0, velocity: 0 })));
  const raf = useRef(0);
  const lastTime = useRef(0);
  const pointer = useRef({ x: -1000, y: -1000 });
  const [breathing, setBreathing] = useState(false);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  useEffect(() => {
    if (!breathing) return;
    const timer = setTimeout(() => setBreathing(false), 24000);
    return () => clearTimeout(timer);
  }, [breathing]);

  function tick(time: number) {
    const dt = Math.min((time - (lastTime.current || time - 16.67)) / 16.67, 2);
    lastTime.current = time;
    let moving = false;
    springs.current.forEach((spring, i) => {
      spring.velocity += -spring.value * 0.085 * dt;
      spring.velocity *= Math.pow(0.83, dt);
      spring.value += spring.velocity * dt;
      if (Math.abs(spring.value) + Math.abs(spring.velocity) > 0.035) moving = true;
      else { spring.value = 0; spring.velocity = 0; }
      const { x, y } = rays[i];
      const bend = spring.value;
      paths.current[i]?.setAttribute("d", `M200 200 C${200 + x * 56 - y * bend} ${200 + y * 56 + x * bend}, ${200 + x * 110 - y * bend} ${200 + y * 110 + x * bend}, ${200 + x * 158} ${200 + y * 158}`);
    });
    raf.current = moving ? requestAnimationFrame(tick) : 0;
    if (!moving) lastTime.current = 0;
  }

  function interact(event: React.PointerEvent<SVGSVGElement>) {
    if (breathing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const matrix = svg.current?.getScreenCTM();
    if (!matrix) return;
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    const old = pointer.current;
    const deltaX = old.x === -1000 ? 0 : Math.max(-24, Math.min(24, point.x - old.x));
    const deltaY = old.y === -1000 ? 0 : Math.max(-24, Math.min(24, point.y - old.y));
    pointer.current = point;
    rays.forEach(({ x, y }, i) => {
      const along = (point.x - 200) * x + (point.y - 200) * y;
      const across = -(point.x - 200) * y + (point.y - 200) * x;
      if (along > 25 && along < 182 && Math.abs(across) < 52) {
        const force = (-deltaX * y + deltaY * x) * (1 - Math.abs(across) / 52);
        springs.current[i].velocity += force * 0.8;
        springs.current[i].value = Math.max(-58, Math.min(58, springs.current[i].value + force * 0.5));
      }
    });
    if (!raf.current) raf.current = requestAnimationFrame(tick);
  }

  return <div className={`star-experiment${breathing ? " is-breathing" : ""}`}>
    <div className="star-orbit" aria-hidden="true" />
    <svg ref={svg} className="elastic-star" viewBox="0 0 400 400" role="img" aria-label="Упругая звёздочка — логотип chishkin" onPointerMove={interact} onPointerLeave={() => { pointer.current = { x: -1000, y: -1000 }; }}>
      {rays.map(({ x, y }, i) => <path ref={(node) => { paths.current[i] = node; }} key={i} d={`M200 200 L${200 + x * 158} ${200 + y * 158}`} fill="none" stroke="currentColor" strokeWidth="49" />)}
    </svg>
    <div className="star-caption"><span className="tiny-cross">+</span><span>{breathing ? "Вдох — 4 секунды. Выдох — 4 секунды." : "Можно потрогать. Она не сломается."}</span></div>
    <button className="pause-button" aria-pressed={breathing} onClick={() => setBreathing(!breathing)}><span aria-hidden="true">{breathing ? "×" : "◌"}</span> {breathing ? "Вернуться к делам" : "Или просто выдохнуть"}</button>
    <span className="sr-only" role="status">{breathing ? "Пауза на три дыхательных цикла. Вдох четыре секунды, выдох четыре секунды. Можно остановить в любой момент." : ""}</span>
  </div>;
}

