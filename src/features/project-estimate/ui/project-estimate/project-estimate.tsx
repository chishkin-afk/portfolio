"use client";

import { contacts } from "@/shared/config/contacts";
import { Arrow } from "@/shared/ui/arrow/arrow";
import { Button } from "@/shared/ui/button/button";
import { useState } from "react";
import { estimates } from "../../model/estimates";
import styles from "./project-estimate.module.scss";

export function ProjectEstimate() {
  const [selected, setSelected] = useState(0);
  const estimate = estimates[selected];

  return (
    <div className={styles.estimate}>
      <div className={styles.selection}>
        <p className={styles.label}>ВЫБЕРИТЕ ФОРМАТ ПРОЕКТА</p>
        <div
          className={styles.options}
          role="group"
          aria-label="Формат проекта"
        >
          {estimates.map((item, index) => (
            <button
              key={item.id}
              className={styles.option}
              type="button"
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <span>{item.number}</span>
              <span>{item.title}</span>
              <span className={styles.indicator} aria-hidden="true">
                {selected === index ? <Arrow /> : "+"}
              </span>
            </button>
          ))}
        </div>
        <p className={styles.note}>
          Это ориентиры для разработки при готовом контенте.
          <br />
          Точные сроки определим после обсуждения задачи.
        </p>
      </div>
      <div className={styles.result} aria-live="polite" aria-atomic="true">
        <div className={styles.duration}>
          {estimate.prefix ? (
            <span className={styles.prefix}>{estimate.prefix}</span>
          ) : null}{" "}
          <span key={estimate.id} className={styles.value}>
            {estimate.duration}
          </span>{" "}
          <span className={styles.unit}>{estimate.unit}</span>
        </div>
        <h3>{estimate.heading}</h3>
        <p className={styles.description}>{estimate.description}</p>
        <ul className={styles.includes}>
          {estimate.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Button
          variant="outline"
          hoverEffect="circle"
          href={contacts.telegram}
        >
          Обсудить задачу
        </Button>
      </div>
    </div>
  );
}
