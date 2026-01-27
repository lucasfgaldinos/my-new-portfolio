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
    description:
      "Desenvolvimento de aplicações web completas, atuando no frontend e backend, com foco em APIs, modelagem de dados e integração com bancos de dados.",
  },
  {
    id: ++id,
    title: "Eletricista",
    companyName: "LAS - Latin America Solar",
    startDate: 2021,
    endDate: 2022,
    description:
      "Atuação na área elétrica, desenvolvendo habilidades como resolução de problemas, atenção a detalhes e responsabilidade técnica.",
  },
];
