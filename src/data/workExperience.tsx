export type WorkExperience = {
  id: number;
  title: string;
  companyName: string;
  startDate: number;
  endDate: number | null;
  description: string;
};

let id = 0;

export const workExperience: WorkExperience[] = [
  {
    id: ++id,
    title: "Desenvolvedor Full Stack",
    companyName: "Freelancer",
    startDate: 2024,
    endDate: null,
    description: "Desenvolvimento de novas funções e aplicações bem dahoras.",
  },
  {
    id: ++id,
    title: "Eletricista",
    companyName: "LAS",
    startDate: 2021,
    endDate: 2023,
    description: "Montagem e instalação de placas fotovoltaicas.",
  },
  {
    id: ++id,
    title: "Auxiliar de eletricista",
    companyName: "Zenit",
    startDate: 2020,
    endDate: 2020,
    description: "Aprendendo uma nova profissão.",
  },
];
