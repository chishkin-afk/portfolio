"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./copy-email-button.module.scss";

type CopyStatus = "idle" | "copied" | "error";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  async function handleCopy() {
    if (resetTimer.current) clearTimeout(resetTimer.current);

    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    resetTimer.current = setTimeout(() => setStatus("idle"), 500);
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleCopy}
      aria-label={`Скопировать почту ${email}`}
      data-status={status}
    >
      <span className={styles.label}>
        <span className={styles.address}>{email}</span>
        <span className={styles.feedback} role="status" aria-live="polite">
          {status === "copied" ? "Скопировано" : status === "error" ? "Не удалось скопировать" : ""}
        </span>
      </span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {status === "copied" ? (
          <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.5" />
        ) : (
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M8 8h12v12H8z" />
            <path d="M16 8V4H4v12h4" />
          </g>
        )}
      </svg>
    </button>
  );
}
