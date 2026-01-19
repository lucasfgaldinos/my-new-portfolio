import poster from "@/assets/projects/easybills/poster.png";
import img1 from "@/assets/projects/gbuddy/1.jpg";
import img2 from "@/assets/projects/gbuddy/2.jpg";
import img3 from "@/assets/projects/gbuddy/3.jpg";
import img4 from "@/assets/projects/gbuddy/4.jpg";
import img5 from "@/assets/projects/gbuddy/5.jpg";
import type { Project } from ".";

export const easybills: Project = {
  name: "EasyBills",
  description:
    "MVP Full Stack de um Dashboard financeiro moderno e responsivo, focado na visualização clara de dados e na experiência do usuário. Permite autenticação, gerenciamento de transações (receitas e despesas), categorização, resumo financeiro com gráficos e filtros por data.",
  stack: [
    "React",
    "TailwindCSS",
    "TypeScript",
    "Node",
    "Fastify",
    "PrismaORM",
    "MongoDB",
    "Firebase",
  ],
  type: "fullstack",
  isFreelancer: false,
  isStar: true,
  poster: poster,
  imgs: [img1, img2, img3, img4, img5],
};
