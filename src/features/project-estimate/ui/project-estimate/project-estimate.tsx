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
      <div className={styles.selection} data-reveal>
        <p className={styles.label}>Выберите формат проекта</p>
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
              <span className={styles.optionCopy}>
                <span>{item.title}</span>
                <span className={styles.optionPrice}>от {item.price} ₽</span>
              </span>
              <span className={styles.indicator} aria-hidden="true">
                {selected === index ? <Arrow /> : "+"}
              </span>
            </button>
          ))}
        </div>
        <p className={styles.note}>
          Стартовые цены и сроки — при готовом контенте.
          <br />
          Точную стоимость и сроки определим после обсуждения задачи.
        </p>
      </div>
      <div className={styles.result} data-reveal aria-live="polite" aria-atomic="true">
        <div className={styles.price}>
          <span className={styles.prefix}>от</span>{" "}
          <span className={styles.value}>{estimate.price}</span>{" "}
          <span className={styles.unit}>₽</span>
        </div>
        <p className={styles.duration}>
          <strong className={styles.durationValue}>
            {estimate.duration} {estimate.unit}
          </strong>
        </p>
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
