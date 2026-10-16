"use client";

import { useEffect, useRef } from "react";

export function useHeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const object = objectRef.current;
    const title = titleRef.current;
    if (!section || !object || !title) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    const paint = () => {
      frame = 0;
      if (preference.matches) {
        object.style.transform = "none";
        title.style.transform = "none";
        return;
      }
      const progress = Math.max(
        0,
        Math.min(-section.getBoundingClientRect().top, section.offsetHeight),
      );
      object.style.transform = `translate3d(0, ${-progress * 0.52}px, 0) rotate(${-progress * 0.055}deg)`;
      title.style.transform = `translate3d(0, ${-progress * 0.16}px, 0)`;
    };
    const requestPaint = () => {
      if (!frame && visible) frame = requestAnimationFrame(paint);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) requestPaint();
    });
    observer.observe(section);
    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint, { passive: true });
    preference.addEventListener("change", paint);
    paint();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", requestPaint);
      preference.removeEventListener("change", paint);
    };
  }, []);

  return { sectionRef, objectRef, titleRef };
}
