import { CubeIcon, LightbulbIcon, UsersFourIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

type StrengthsProps = {
  id: number;
  icon: ReactNode;
  title: string;
  subTitle: string;
};

let id = 0;
const iconSize = 24;

export const strengths: StrengthsProps[] = [
  {
    id: ++id,
    icon: <CubeIcon size={iconSize} />,
    title: "Visão integrada (Full Stack)",
    subTitle:
      "Capacidade de atuar em todas as camadas da aplicação, garantindo sinergia entre o frontend, backend e banco de dados.",
  },
  {
    id: ++id,
    icon: <LightbulbIcon size={iconSize} />,
    title: "Foco em soluções eficientes",
    subTitle:
      "Compromisso com código limpo, performance e escalabilidade para criar produtos robustos e duradouros.",
  },
  {
    id: ++id,
    icon: <UsersFourIcon size={iconSize} />,
    title: "Colaboração e comunicação",
    subTitle:
      "Facilidade em trabalhar em equipe, comunicar ideias de forma clara e colaborar para alcançar os melhores resultados.",
  },
];
