import type { Stack } from "./skills";

type ButtonOptionsProps = {
  screenName: string;
  skillName: Stack;
};

export const buttonOptions: ButtonOptionsProps[] = [
  {
    screenName: "Linguagens",
    skillName: "languages",
  },
  {
    screenName: "Frontend",
    skillName: "frontend",
  },
  {
    screenName: "Backend",
    skillName: "backend",
  },
  {
    screenName: "Outros",
    skillName: "others",
  },
];
