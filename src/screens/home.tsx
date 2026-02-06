import { Background } from "@/components/background";
import { Header } from "@/components/header";
import { ModalImageViewer } from "@/components/modalImageViewer";
import { About } from "@/sections/about";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { useImagesModalStore } from "@/store/useImagesModalStore";

export function Home() {
  const { modalIsOpen } = useImagesModalStore();

  return (
    <div>
      <Background />

      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Footer />

      {modalIsOpen && <ModalImageViewer />}
    </div>
  );
}
