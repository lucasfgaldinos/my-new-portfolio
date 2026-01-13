import type { ProjectProps } from ".";

export const projectExample: ProjectProps = {
  id: crypto.randomUUID(),
  name: "Projeto",
  description: "Apenas um exemplo de projeto.",
  stack: ["React", "Node.js", "Postgres"],
  type: "fullstack",
  isFreelancer: false,
  isStar: true,
  poster: "",
  imgs: [""],
};
