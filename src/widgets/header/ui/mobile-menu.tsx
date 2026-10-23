"use client";

import { useEffect, useRef, useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return <div className="mobile-menu"><button ref={button} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Закрыть меню" : "Открыть меню"} onClick={() => setOpen(!open)}>{open ? "Закрыть −" : "Меню +"}</button>{open && <nav id="mobile-navigation" aria-label="Мобильная навигация" onClick={() => setOpen(false)}><a href="#work">Проект</a><a href="#services">Услуги</a><a href="#process">Процесс</a><a href="#contact">Контакты</a></nav>}</div>;
}

