"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const root = document.getElementById("main");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || preference.matches) return;

    const pending = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          pending.get(entry.target as HTMLElement)?.play();
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -24px 0px", threshold: 0 },
    );

    root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      // Content stays visible without JavaScript. Each animation runs only once.
      // Individual translate leaves the hero's parallax transform independent.
      const animation = element.animate(
        [
          { opacity: 0, translate: "0 18px" },
          { opacity: 1, translate: "0 0" },
        ],
        { duration: 600, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "both" },
      );
      animation.pause();
      animation.onfinish = () => {
        animation.cancel();
        pending.delete(element);
      };
      pending.set(element, animation);
      observer.observe(element);
    });

    const showFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      for (const [element, animation] of pending) {
        if (element.contains(event.target)) {
          animation.cancel();
          observer.unobserve(element);
          pending.delete(element);
        }
      }
    };
    const stop = () => {
      observer.disconnect();
      for (const animation of pending.values()) animation.cancel();
      pending.clear();
    };
    const onPreferenceChange = () => {
      if (preference.matches) stop();
    };
    root.addEventListener("focusin", showFocused);
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      stop();
      root.removeEventListener("focusin", showFocused);
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return null;
}
