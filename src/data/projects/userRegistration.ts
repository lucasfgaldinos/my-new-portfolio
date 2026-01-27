import img1 from "@/assets/projects/userRegistration/1.png";
import img2 from "@/assets/projects/userRegistration/2.png";
import img3 from "@/assets/projects/userRegistration/3.png";
import img4 from "@/assets/projects/userRegistration/4.png";
import img5 from "@/assets/projects/userRegistration/5.png";
import img6 from "@/assets/projects/userRegistration/6.png";
import img7 from "@/assets/projects/userRegistration/7.png";
import type { Project } from ".";

export const userRegistration: Project = {
  name: "Cadastro de usuários",
  description:
    "Sistema de cadastro de usuários com CRUD completo (criação, edição, listagem e exclusão).",
  stack: [
    "JavaScript",
    "React",
    "styled-components",
    "Node.js",
    "Express",
    "MongoDB",
  ],
  type: "fullstack",
  isFreelancer: false,
  isHighlight: false,
  banner: img1,
  imgs: [img1, img2, img3, img4, img5, img6, img7],
  links: {
    repo: "https://github.com/lucasfgaldinos/interface-cadastro-de-usuarios",
  },
};
