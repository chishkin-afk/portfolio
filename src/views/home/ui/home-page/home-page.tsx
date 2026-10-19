import { Header } from "@/widgets/header/ui/header/header";
import { Hero } from "@/widgets/hero/ui/hero/hero";
import { Features } from "@/widgets/features/ui/features/features";
import { Projects } from "@/widgets/projects/ui/projects/projects";
import { Timeline } from "@/widgets/timeline/ui/timeline/timeline";
import { Contact } from "@/widgets/contact/ui/contact/contact";
import { Footer } from "@/widgets/footer/ui/footer/footer";
import { Questions } from "@/shared/ui/questions/questions";
import { ScrollReveal } from "@/shared/ui/scroll-reveal/scroll-reveal";
import { homeQuestions } from "../../model/questions";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <ScrollReveal />
        <Hero />
        <Features />
        <Projects />
        <Timeline />
        <Questions items={homeQuestions} title="Вопросы о разработке сайтов" index="05" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
