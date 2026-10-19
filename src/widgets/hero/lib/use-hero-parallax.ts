"use client";

import { useEffect, useRef } from "react";

export function useHeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const object = objectRef.current;
    const title = titleRef.current;
    if (!section || !object || !title) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const native = CSS.supports("animation-timeline", "scroll(root block)")
      && CSS.supports("animation-range", "0px 100px");
    let start = 0;
    let height = 0;
    let lastProgress = -1;
    const paint = () => {
      if (preference.matches) {
        object.style.transform = "none";
        title.style.transform = "none";
        lastProgress = -1;
        return;
      }
      const progress = Math.max(0, Math.min(window.scrollY - start, height));
      if (progress === lastProgress) return;
      lastProgress = progress;
      object.style.transform = `translate3d(0, ${-progress * 0.52}px, 0) rotate(${-progress * 0.055}deg)`;
      title.style.transform = `translate3d(0, ${-progress * 0.16}px, 0)`;
    };
    const measure = () => {
      start = section.getBoundingClientRect().top + window.scrollY;
      height = section.offsetHeight;
      if (native) {
        for (const element of [object, title]) {
          element.style.setProperty("--parallax-start", `${start}px`);
          element.style.setProperty("--parallax-end", `${start + height}px`);
        }
        object.style.setProperty("--parallax-y", `${-height * 0.52}px`);
        object.style.setProperty("--parallax-rotation", `${-height * 0.055}deg`);
        title.style.setProperty("--parallax-y", `${-height * 0.16}px`);
        section.dataset.parallax = "native";
      } else {
        lastProgress = -1;
        paint();
      }
    };

    // Native timelines stay in sync with browser scrolling, even under JS load.
    // The fallback uses cached geometry and writes immediately, without easing.
    const observer = new ResizeObserver(measure);
    observer.observe(section);
    if (!native) {
      window.addEventListener("scroll", paint, { passive: true });
      preference.addEventListener("change", paint);
    }
    window.addEventListener("resize", measure, { passive: true });
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", paint);
      window.removeEventListener("resize", measure);
      preference.removeEventListener("change", paint);
      delete section.dataset.parallax;
      for (const element of [object, title]) {
        element.style.removeProperty("transform");
        for (const property of ["--parallax-start", "--parallax-end", "--parallax-y", "--parallax-rotation"]) {
          element.style.removeProperty(property);
        }
      }
    };
  }, []);

  return { sectionRef, objectRef, titleRef };
}
