import { Arrow } from "@/src/shared/ui/arrow";
import { profile } from "@/src/entities/profile";
import { MobileMenu } from "./mobile-menu";
import "./header.css";

export function Header() {
  return <header className="header"><div className="header-inner wrap">
    <a className="brand" href="#" aria-label="chishkin — на главную"><img src="/asterisk.svg" width="26" height="26" alt="" />chishkin</a>
    <nav className="desktop-nav" aria-label="Основная навигация"><a href="#work">Проект</a><a href="#services">Услуги</a><a href="#process">Процесс</a></nav>
    <a className="header-contact" href={profile.telegram} target="_blank" rel="noreferrer">Обсудить идею <Arrow /></a>
    <MobileMenu />
  </div></header>;
}
