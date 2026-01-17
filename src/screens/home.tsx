import { Header } from "@/components/header";
import { About } from "@/sections/about";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";

export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
