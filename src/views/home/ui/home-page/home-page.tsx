import { Header } from "@/widgets/header/ui/header/header";
import { Hero } from "@/widgets/hero/ui/hero/hero";
import { Features } from "@/widgets/features/ui/features/features";
import { Projects } from "@/widgets/projects/ui/projects/projects";
import { Timeline } from "@/widgets/timeline/ui/timeline/timeline";
import { Contact } from "@/widgets/contact/ui/contact/contact";
import { Footer } from "@/widgets/footer/ui/footer/footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
