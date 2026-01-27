import img from "@/assets/projects/todoApp.png";
import type { Project } from ".";

export const todoApp: Project = {
  name: "Todo App",
  description:
    "Aplicação de lista de tarefas com criação, conclusão, remoção e persistência local.",
  stack: ["JavaScript", "React", "CSS"],
  type: "frontend",
  isFreelancer: false,
  isHighlight: false,
  banner: img,
  links: {
    deploy: "https://todoapp-basic-app.vercel.app",
    repo: "https://github.com/lucasfgaldinos/todo-app",
  },
};
