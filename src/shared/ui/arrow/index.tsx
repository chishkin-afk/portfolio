export function Arrow({ direction = "diagonal" }: { direction?: "diagonal" | "down" | "up" }) {
  return <svg className={`arrow arrow--${direction}`} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
