import bootstrapImg from "@/assets/skills/bootstrap.png";
import cssImg from "@/assets/skills/css.png";
import dockerImg from "@/assets/skills/docker.png";
import expressImg from "@/assets/skills/express.png";
import fastifyImg from "@/assets/skills/fastify.png";
import gitImg from "@/assets/skills/git.png";
import githubImg from "@/assets/skills/github.png";
import jsImg from "@/assets/skills/js.png";
import knexImg from "@/assets/skills/knex.png";
import mongoImg from "@/assets/skills/mongo.png";
import mongooseImg from "@/assets/skills/mongoose.png";
import nodeImg from "@/assets/skills/node.png";
import postgresqlImg from "@/assets/skills/postgresql.png";
import prismaImg from "@/assets/skills/prisma.png";
import reactImg from "@/assets/skills/react.png";
import sequelizeImg from "@/assets/skills/sequelize.png";
import styledComponentsImg from "@/assets/skills/styled-components.png";
import tailwindImg from "@/assets/skills/tailwind.png";
import tsImg from "@/assets/skills/ts.png";

export type Stack = "languages" | "frontend" | "backend" | "others";

export type Skill = {
  name: string;
  img: string;
  stack: Stack;
};

export const skills: Skill[] = [
  {
    name: "JavaScript",
    img: jsImg,
    stack: "languages",
  },
  {
    name: "TypeScript",
    img: tsImg,
    stack: "languages",
  },
  {
    name: "HTML",
    img: jsImg,
    stack: "frontend",
  },
  {
    name: "CSS",
    img: cssImg,
    stack: "frontend",
  },
  {
    name: "React",
    img: reactImg,
    stack: "frontend",
  },
  {
    name: "TailwindCSS",
    img: tailwindImg,
    stack: "frontend",
  },
  {
    name: "Styled-Components",
    img: styledComponentsImg,
    stack: "frontend",
  },
  {
    name: "Bootstrap",
    img: bootstrapImg,
    stack: "frontend",
  },
  {
    name: "Node",
    img: nodeImg,
    stack: "backend",
  },
  {
    name: "Express",
    img: expressImg,
    stack: "backend",
  },
  {
    name: "Fastify",
    img: fastifyImg,
    stack: "backend",
  },
  {
    name: "PostgreSQL",
    img: postgresqlImg,
    stack: "backend",
  },
  {
    name: "MongoDB",
    img: mongoImg,
    stack: "backend",
  },
  {
    name: "SequelizeORM",
    img: sequelizeImg,
    stack: "backend",
  },
  {
    name: "Mongoose",
    img: mongooseImg,
    stack: "backend",
  },
  {
    name: "PrismaORM",
    img: prismaImg,
    stack: "backend",
  },
  {
    name: "Knex",
    img: knexImg,
    stack: "backend",
  },
  {
    name: "Git",
    img: gitImg,
    stack: "others",
  },
  {
    name: "GitHub",
    img: githubImg,
    stack: "others",
  },
  {
    name: "Docker",
    img: dockerImg,
    stack: "others",
  },
];
