import { Header } from "@/components/header";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";

export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}
