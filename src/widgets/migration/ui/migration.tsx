import { Arrow } from "@/src/shared/ui/arrow";
import { profile } from "@/src/entities/profile";
import "./migration.css";

export function Migration() {
  return <section className="migration section wrap" data-scene="migration" aria-labelledby="migration-title"><div className="migration-card" data-reveal>
    <div className="migration-copy"><span className="eyebrow" data-reveal>Когда конструктора уже мало</span><h2 id="migration-title" data-reveal>Выросли<br />из <span className="muted">Тильды?</span></h2><p data-reveal>Это хороший знак. Перенесу вашу идею на собственный код и сервер — с нужной логикой, интеграциями и пространством для роста.</p><a className="button button-dark" href={profile.telegram} target="_blank" rel="noreferrer" data-reveal>Обсудить переезд <Arrow /></a></div>
    <div className="migration-art" aria-hidden="true"><div className="constraint-box"><span>В рамках</span><div className="escape-star" data-scroll="escape">✳</div></div><p>Ваш проект. Ваши правила.</p></div>
  </div></section>;
}
