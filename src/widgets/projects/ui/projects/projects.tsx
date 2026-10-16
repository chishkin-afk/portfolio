import { projects } from "@/entities/project/model/projects";
import { ProjectCard } from "@/entities/project/ui/project-card/project-card";
import { SectionLabel } from "@/shared/ui/section-label/section-label";
import styles from "./projects.module.scss";

export function Projects() {
  return (
    <section
      className={styles.section}
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionLabel index="03">Мои проекты</SectionLabel>
      <div className={styles.heading}>
        <h2 id="projects-title">
          Меньше слов.
          <br />
          Больше дела.
        </h2>
        <p>
          Каждый проект — отдельная история.
          <br />
          Вот одна из них.
        </p>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}
