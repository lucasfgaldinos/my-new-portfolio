import img from "@/assets/projects/yourLandingPage.png";
import type { Project } from ".";

export const yourLandingPage: Project = {
  name: "Sua Landing Page",
  description:
    "Página desenvolvida para mostrar a importância de uma landing page como vitrine online de um negócio.",
  stack: ["HTML", "CSS", "JavaScript"],
  type: "frontend",
  isFreelancer: false,
  isHighlight: false,
  banner: img,
  links: {
    deploy: "https://sualandingpage.netlify.app/",
    repo: "https://github.com/lucasfgaldinos/sua-landing-page",
  },
};
