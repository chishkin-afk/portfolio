import { Header } from "@/src/widgets/header";
import { Hero } from "@/src/widgets/hero";
import { About } from "@/src/widgets/about";
import { Project } from "@/src/widgets/project";
import { Services } from "@/src/widgets/services";
import { Stack } from "@/src/widgets/stack";
import { Process } from "@/src/widgets/process";
import { Migration } from "@/src/widgets/migration";
import { Faq } from "@/src/widgets/faq";
import { Contact } from "@/src/widgets/contact";
import { LoadingCurtain } from "@/src/shared/ui/loading-curtain";
import { ScrollMotion } from "@/src/shared/ui/scroll-motion";
import { profile } from "@/src/entities/profile";

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile.structuredData).replace(/</g, "\\u003c") }} />
    <ScrollMotion />
    <LoadingCurtain />
    <a className="skip-link" href="#main">Перейти к содержимому</a>
    <Header />
    <main id="main">
      <Hero />
      <About />
      <Project />
      <Services />
      <Stack />
      <Process />
      <Migration />
      <Faq />
    </main>
    <Contact />
  </>;
}
