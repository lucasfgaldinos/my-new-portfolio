import img from "@/assets/projects/minimalistLpTemplate.png";
import type { Project } from ".";

export const minimalistLpTemplate: Project = {
  name: "Landing Page",
  description:
    "Template de landing page minimalista, ideal para projetos rápidos e validação de ideias.",
  stack: ["TypeScript", "React", "Tailwind CSS"],
  type: "frontend",
  isFreelancer: false,
  isHighlight: false,
  banner: img,
  links: {
    deploy: "https://minimalist-landing-page-template.vercel.app",
    repo: "https://github.com/lucasfgaldinos/minimalist-landing-page-template",
  },
};
