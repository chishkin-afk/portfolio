import styles from "./section-label.module.scss";

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.label}>
      <span>/{index}</span>
      <span>{children}</span>
    </div>
  );
}
