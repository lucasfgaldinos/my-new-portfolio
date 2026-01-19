export type ProjectStack = "fullstack" | "frontend" | "backend";

export type Project = {
  name: string;
  description: string;
  stack: string[];
  links?: {
    deploy?: string;
    repo?: string;
  };
  type: ProjectStack;
  isFreelancer: boolean;
  isStar: boolean;
  poster: string;
  imgs: string[];
};

export const projects: Project[] = [];
