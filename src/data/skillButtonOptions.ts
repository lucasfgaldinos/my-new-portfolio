import type { Stack } from "./skills";

type SkillButtonNavOptions = {
  screenName: string;
  skillName: Stack;
};

export const skillButtonNavOptions: SkillButtonNavOptions[] = [
  {
    screenName: "Linguagens",
    skillName: "languages",
  },
  {
    screenName: "Front-end",
    skillName: "frontend",
  },
  {
    screenName: "Back-end",
    skillName: "backend",
  },
  {
    screenName: "Outros",
    skillName: "others",
  },
];
