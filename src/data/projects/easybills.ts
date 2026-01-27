import img1 from "@/assets/projects/easybills/1.png";
import img2 from "@/assets/projects/easybills/2.png";
import img3 from "@/assets/projects/easybills/3.png";
import img4 from "@/assets/projects/easybills/4.png";
import img5 from "@/assets/projects/easybills/5.png";
import type { Project } from ".";

export const easyBills: Project = {
  name: "EasyBills",
  description:
    "Dashboard financeiro para controle de receitas e despesas, com autenticação e filtros por período.",
  stack: [
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Fastify",
    "MongoDB",
    "Firebase",
  ],
  type: "fullstack",
  isFreelancer: false,
  isHighlight: true,
  banner: img3,
  imgs: [img1, img2, img3, img4, img5],
  links: { repo: "https://github.com/lucasfgaldinos/easybills-interface" },
};
