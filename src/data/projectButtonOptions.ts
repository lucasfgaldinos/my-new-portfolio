export type ProjectButtonOptions =
  | "highlights"
  | "freelancer"
  | "fullstack"
  | "frontend";

type ProjectButtonNavOptions = {
  screenName: string;
  optionName: ProjectButtonOptions;
};

export const projectButtonOptions: ProjectButtonNavOptions[] = [
  {
    screenName: "Destaques",
    optionName: "highlights",
  },
  {
    screenName: "Freelancer",
    optionName: "freelancer",
  },
  {
    screenName: "Full Stack",
    optionName: "fullstack",
  },
  {
    screenName: "Front-end",
    optionName: "frontend",
  },
];
