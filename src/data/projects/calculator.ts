import img from "@/assets/projects/calculator.png";
import type { Project } from ".";

export const calculator: Project = {
  name: "Calculadora",
  description: "Calculadora com operações matemáticas básicas.",
  stack: ["JavaScript", "React", "styled-components"],
  type: "frontend",
  isFreelancer: false,
  isHighlight: false,
  banner: img,
  links: {
    deploy: "https://lucasfgaldinos.github.io/calculadora",
    repo: "https://github.com/lucasfgaldinos/calculadora",
  },
};
