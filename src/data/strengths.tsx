import {
  CubeIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  UsersFourIcon,
} from "@phosphor-icons/react";
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
    title: "Visão Full Stack",
    subTitle:
      "Atuação tanto no front-end quanto no back-end, entendendo como as partes da aplicação se conectam.",
  },
  {
    id: ++id,
    icon: <LightbulbIcon size={iconSize} />,
    title: "Soluções práticas e eficientes",
    subTitle:
      "Foco em código limpo e organizado, priorizando soluções simples que resolvem o problema real.",
  },
  {
    id: ++id,
    icon: <UsersFourIcon size={iconSize} />,
    title: "Comunicação e colaboração",
    subTitle:
      "Facilidade para comunicar ideias com clareza, colaborar em equipe, ouvir feedback e alinhar soluções.",
  },
  {
    id: ++id,
    icon: <ShieldCheckIcon size={iconSize} />,
    title: "Disciplina e responsabilidade",
    subTitle:
      "Compromisso com organização, qualidade na entrega e constância no processo, mesmo em cenários desafiadores.",
  },
];
