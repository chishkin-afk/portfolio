"use client";

import { useEffect, useState } from "react";
import "./loading-curtain.css";

export function LoadingCurtain() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let live = true;
    const minimum = new Promise((resolve) => setTimeout(resolve, 450));
    Promise.all([document.fonts.ready, minimum]).then(() => { if (live) setReady(true); });
    const fallback = setTimeout(() => setReady(true), 1600);
    return () => { live = false; clearTimeout(fallback); };
  }, []);
  return <div className={`loading-curtain${ready ? " is-ready" : ""}`} aria-hidden="true"><div className="curtain-panel curtain-top"><span>chishkin</span></div><div className="curtain-panel curtain-bottom"><span>Всё начинается с идеи.</span><span>✳</span></div></div>;
}

