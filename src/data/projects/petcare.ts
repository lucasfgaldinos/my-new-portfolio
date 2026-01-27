import img from "@/assets/projects/petcare.png";
import type { Project } from ".";

export const petcare: Project = {
  name: "PetCare",
  description:
    "Landing page para serviço de cuidados com pets, com layout moderno e interações leves.",
  stack: ["TypeScript", "React", "Tailwind CSS"],
  type: "frontend",
  isFreelancer: false,
  isHighlight: false,
  banner: img,
  links: {
    deploy: "https://petcareoficial.netlify.app",
    repo: "https://github.com/lucasfgaldinos/petcare",
  },
};
