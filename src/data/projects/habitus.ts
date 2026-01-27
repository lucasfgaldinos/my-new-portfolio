import img1 from "@/assets/projects/habitus/1.png";
import img2 from "@/assets/projects/habitus/2.png";
import img3 from "@/assets/projects/habitus/3.png";
import type { Project } from ".";

export const habitus: Project = {
  name: "Habitus",
  description:
    "Dashboard para controle de hábitos e ciclos de foco, com autenticação e estatísticas.",
  stack: ["TypeScript", "React", "CSS", "Node.js", "Express", "MongoDB"],
  type: "fullstack",
  isFreelancer: false,
  isHighlight: true,
  banner: img2,
  imgs: [img1, img2, img3],
  links: { repo: "https://github.com/lucasfgaldinos/habitus-interface" },
};
