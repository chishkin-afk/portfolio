"use client";

import { useEffect } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function ScrollMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scenes = [...document.querySelectorAll<HTMLElement>("[data-scene]")];
    const active = new Set<HTMLElement>();
    const targets = new Map(scenes.map((scene) => [scene, [...scene.querySelectorAll<HTMLElement>("[data-scroll]")]]));
    let frame = 0;
    const update = () => {
      frame = 0;
      if (media.matches || document.hidden) return;
      const height = window.innerHeight;
      // Batch layout reads before writes. Animate only visible sections.
      const positions = [...active].map((scene) => ({ scene, rect: scene.getBoundingClientRect() }));
      positions.forEach(({ scene, rect }) => {
        const progress = clamp((height - rect.top) / (height + rect.height));
        const exit = clamp(-rect.top / Math.max(1, rect.height));
        const enter = 1 - clamp((height - rect.top) / (height * .85));
        (targets.get(scene) ?? []).forEach((target) => {
          const amount = Number(target.dataset.amount ?? 1);
          switch (target.dataset.scroll) {
            case "hero-left": target.style.transform = `translate3d(${-exit * 35}px,${-exit * 130}px,0)`; break;
            case "hero-right": target.style.transform = `translate3d(${exit * 30}px,${-exit * 200}px,0)`; break;
            case "hero-star": target.style.transform = `translate3d(0,${-exit * 70}px,0) rotate(${exit * 18}deg)`; break;
            case "slide": target.style.transform = `translate3d(${(progress - .5) * amount * 35}px,0,0)`; break;
            case "project": target.style.transform = `translate3d(0,${(progress - .5) * -48}px,0)`; break;
            case "fall": target.style.transform = `translate3d(0,${exit * 38 + enter * -18}px,0) rotate(${(enter * -2 + exit * 2.2) * amount}deg)`; break;
            case "rotate": target.style.transform = `rotate(${(progress - .5) * 90}deg)`; break;
            case "line": target.style.transform = `scaleX(${clamp((height * .8 - rect.top) / (rect.height * .65))})`; break;
            case "escape": target.style.transform = `translate3d(${(progress - .35) * 65}px,${(progress - .35) * -65}px,0) rotate(${progress * 35 - 15}deg)`; break;
            case "rise": target.style.transform = `translate3d(0,${(progress - .5) * -35}px,0)`; break;
          }
        });
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const scene = target as HTMLElement;
        if (isIntersecting) { active.add(scene); scene.classList.add("scene-visible"); }
        else active.delete(scene);
      });
      schedule();
    }, { threshold: 0 });
    const reveals = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("is-revealed");
          reveals.unobserve(target);
        }
      });
    }, { threshold: .05, rootMargin: "0px 0px -20px 0px" });
    scenes.forEach((scene) => {
      scene.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element, i) => {
        element.style.setProperty("--reveal-delay", `${Math.min(i, 4) * 45}ms`);
        reveals.observe(element);
      });
      if (!media.matches) scene.classList.add("scene-ready");
      observer.observe(scene);
    });
    const preferenceChanged = () => {
      scenes.forEach((scene) => {
        scene.classList.add("scene-visible");
        scene.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-revealed"));
        (targets.get(scene) ?? []).forEach((target) => target.style.removeProperty("transform"));
      });
      schedule();
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", schedule);
    media.addEventListener("change", preferenceChanged);
    return () => {
      observer.disconnect(); reveals.disconnect(); cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", schedule);
      media.removeEventListener("change", preferenceChanged);
    };
  }, []);
  return null;
}
