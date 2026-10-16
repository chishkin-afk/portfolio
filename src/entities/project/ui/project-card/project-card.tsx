import Image from "next/image";
import { Arrow } from "@/shared/ui/arrow/arrow";
import type { Project } from "../../model/projects";
import styles from "./project-card.module.scss";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.project}>
      <a
        className={styles.preview}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Открыть проект ${project.name} в новой вкладке`}
      >
        <div className={styles.browserBar}>
          <div aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>{project.displayUrl}</span>
          <Arrow />
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={2880}
            height={1616}
            sizes="(max-width: 640px) 92vw, 90vw"
            className={styles.image}
          />
        </div>
        <span className={styles.view}>
          Открыть проект <Arrow />
        </span>
      </a>
      <div className={styles.info}>
        <div className={styles.name}>
          <span className={styles.number}>01 / {project.category}</span>
          <h3>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
              <Arrow />
            </a>
          </h3>
        </div>
        <div className={styles.details}>
          <p>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
