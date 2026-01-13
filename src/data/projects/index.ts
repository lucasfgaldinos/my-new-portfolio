import { projectExample } from "./projectExample";

export type ProjectTypeProps = "fullstack" | "frontend" | "backend";

export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  links?: {
    deploy?: string;
    repo?: string;
  };
  type: ProjectTypeProps;
  isFreelancer: boolean;
  isStar: boolean;
  poster: string;
  imgs: string[];
};

export const projects: ProjectProps[] = [projectExample];
