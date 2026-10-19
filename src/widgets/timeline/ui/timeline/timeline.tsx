import { SectionLabel } from "@/shared/ui/section-label/section-label";
import { ProjectEstimate } from "@/features/project-estimate/ui/project-estimate/project-estimate";
import styles from "./timeline.module.scss";

export function Timeline() {
  return (
    <section
      className={styles.section}
      id="timeline"
      aria-labelledby="timeline-title"
    >
      <SectionLabel index="04">Цены и сроки</SectionLabel>
      <div className={styles.heading} data-reveal>
        <h2 id="timeline-title">
          У каждой задачи
          <br />
          свой масштаб.
        </h2>
        <p>
          От небольшой страницы до сложного продукта.
          <br />
          Выберите, что ближе к вашей идее.
        </p>
      </div>
      <ProjectEstimate />
    </section>
  );
}
