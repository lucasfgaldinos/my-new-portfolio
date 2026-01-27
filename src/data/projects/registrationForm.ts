import img from "@/assets/projects/registrationForm.png";
import type { Project } from ".";

export const registrationForm: Project = {
  name: "Formulário de registro",
  description: "Formulário de registro focado na validação de dados e campos.",
  stack: ["TypeScript", "React", "Tailwind CSS"],
  type: "frontend",
  isFreelancer: false,
  isHighlight: false,
  banner: img,
  links: {
    deploy: "https://lucasfgaldinos.github.io/registration-form",
    repo: "https://github.com/lucasfgaldinos/registration-form",
  },
};
