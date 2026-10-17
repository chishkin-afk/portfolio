import { SectionLabel } from "@/shared/ui/section-label/section-label";
import styles from "./questions.module.scss";

export function Questions({
  items,
  title,
  index = "FAQ",
}: {
  items: readonly { question: string; answer: string }[];
  title: string;
  index?: string;
}) {
  return (
    <section className={styles.section} aria-labelledby="faq-title" id="faq">
      <SectionLabel index={index}>Вопросы и ответы</SectionLabel>
      <div>
        <h2 id="faq-title">{title}</h2>
        <div className={styles.items}>
          {items.map(({ question, answer }) => (
            <details key={question} className={styles.item}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
