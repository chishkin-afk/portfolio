import type { ComponentProps } from "react";
import { Arrow } from "@/shared/ui/arrow/arrow";
import styles from "./button.module.scss";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "solid" | "outline";
  arrow?: boolean;
  hoverEffect?: "circle";
};

export function Button({
  children,
  className = "",
  variant = "solid",
  arrow = true,
  hoverEffect,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${hoverEffect === "circle" ? styles.circle : ""} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {arrow ? <Arrow /> : null}
    </a>
  );
}
