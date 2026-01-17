import GitImg from "@/assets/skills/git.png";
import NodeImg from "@/assets/skills/node.png";
import PostgresImg from "@/assets/skills/postgres.png";
import ReactImg from "@/assets/skills/react.png";

export type Stack = "languages" | "frontend" | "backend" | "others";

export type Skill = {
  name: string;
  img: string;
  stack: Stack;
};

export const skills: Skill[] = [
  {
    name: "React",
    img: ReactImg,
    stack: "frontend",
  },
  {
    name: "Node",
    img: NodeImg,
    stack: "backend",
  },
  {
    name: "Postgres",
    img: PostgresImg,
    stack: "backend",
  },
  {
    name: "Git",
    img: GitImg,
    stack: "others",
  },
];
