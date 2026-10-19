import styles from "./service-item.module.scss";

type ServiceItemProps = {
  number: string;
  title: string;
  description: string;
  tag: string;
};

export function ServiceItem({
  number,
  title,
  description,
  tag,
}: ServiceItemProps) {
  return (
    <article className={styles.item} data-reveal>
      <div className={styles.top}>
        <span>{number}</span>
        <span aria-hidden="true">↗</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.tag}>{tag}</span>
    </article>
  );
}
