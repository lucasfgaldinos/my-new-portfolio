import img1 from "@/assets/projects/atlasBurguer/1.jpg";
import img2 from "@/assets/projects/atlasBurguer/2.jpg";
import img3 from "@/assets/projects/atlasBurguer/3.jpg";
import img4 from "@/assets/projects/atlasBurguer/4.jpg";
import img5 from "@/assets/projects/atlasBurguer/5.jpg";
import img6 from "@/assets/projects/atlasBurguer/6.jpg";
import img7 from "@/assets/projects/atlasBurguer/7.jpg";
import img8 from "@/assets/projects/atlasBurguer/8.jpg";
import img9 from "@/assets/projects/atlasBurguer/9.jpg";
import poster from "@/assets/projects/atlasBurguer/poster.png";
import type { Project } from ".";

export const atlasBurguer: Project = {
  name: "Atlas Burguer",
  description:
    "Projeto fullstack com interface moderna e responsiva para uma hamburgueria digital, integrando navegação intuitiva, formulários validados e pagamentos online via Stripe. No backend, suporte a APIs eficientes para gerenciamento de pedidos e processamento seguro de transações. A aplicação combina tecnologias robustas para garantir performance, segurança e excelente experiência do usuário.",
  stack: [
    "React",
    "TailwindCSS",
    "TypeScript",
    "Docker",
    "Node",
    "Express",
    "SequelizeORM",
    "PostgreSQL",
    "Mongoose",
    "MongoDB",
  ],
  type: "fullstack",
  isFreelancer: false,
  isStar: true,
  poster: poster,
  imgs: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
};
