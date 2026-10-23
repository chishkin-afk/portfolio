import { SectionLabel } from "@/src/shared/ui/section-heading";
import { Arrow } from "@/src/shared/ui/arrow";
import { profile } from "@/src/entities/profile";
import "./contact.css";

export function Contact() {
  return <footer id="contact" className="contact" data-scene="contact"><div className="wrap contact-inner">
    <div className="contact-top"><SectionLabel number="06">Начнём с «привет»</SectionLabel><span className="availability" data-reveal><i /> Хорошим идеям всегда рад</span></div>
    <div className="contact-main"><h2 data-reveal>Есть идея?<br /><span data-scroll="slide" data-amount="-1">Давайте сделаем.</span></h2><a className="contact-cta" href={profile.telegram} target="_blank" rel="noreferrer" data-reveal>Написать <Arrow /></a></div>
    <div className="contact-links"><a href={profile.telegram} target="_blank" rel="noreferrer" data-reveal><span>Telegram · лучше сюда</span><span>@echishkin <Arrow /></span></a><a href={profile.email} data-reveal><span>Почта</span><span>e.chishkin@yandex.ru <Arrow /></span></a><a href={profile.github} target="_blank" rel="noreferrer" data-reveal><span>GitHub</span><span>chishkin-afk <Arrow /></span></a></div>
    <div className="footer-bottom" data-reveal><a className="footer-brand" href="#">chishkin<span aria-hidden="true">✳</span></a><p>Независимый разработчик.<br />С вниманием к вашему делу.</p><a className="text-link" href="#">К началу <Arrow direction="up" /></a></div>
  </div></footer>;
}
