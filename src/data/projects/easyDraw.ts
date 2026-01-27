import img from "@/assets/projects/easyDraw.png";
import type { Project } from ".";

export const easyDraw: Project = {
  name: "Sorteio Fácil",
  description:
    "Site para sorteio de nomes e números de forma rápida e prática.",
  stack: ["JavaScript", "React", "styled-components"],
  type: "frontend",
  isFreelancer: false,
  isHighlight: false,
  banner: img,
  links: {
    deploy: "https://lucasfgaldinos.github.io/sorteio-facil/",
    repo: "https://github.com/lucasfgaldinos/sorteio-facil",
  },
};
