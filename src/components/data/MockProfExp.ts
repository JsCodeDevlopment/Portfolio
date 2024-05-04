interface useExperiences {
  profExp: profExp[];
  acadExp: acadExp[];
}

interface profExp {
  id: number;
  title: string;
  company: string;
  model: string;
  start: string;
  end: string;
  period: string;
  description: string;
}

interface acadExp {
  id: number;
  course: string;
  company: string;
  start: string;
  end: string;
  description: string;
}

export function useExperiences(): useExperiences {
  const profExp: profExp[] = [
    {
      id: 1,
      title: "Desenvolvedor Web",
      company: "VintePila",
      start: "fev de 2023",
      end: "set de 2023",
      model: "Remoto",
      period: "Tempo integral",
      description:
        "Desenvolvendo sites e leading pages, desenvolvendo desde o design até o deploy.",
    },
    {
      id: 2,
      title: "Desenvolvedor FullStack",
      company: "Next Level Agency",
      start: "abr de 2024",
      end: "o momento",
      model: "Remoto",
      period: "Tempo integral",
      description:
        "A Next é uma startup que estou ajudando a erguer com amigos e lá atuo como desenvolvedor fullstack contribuindo com a contrução de sites, aplicações e sistemas.",
    },
    {
      id: 3,
      title: "Desenvolvedor FullStack",
      company: "Infinity Tec",
      start: "abr de 2024",
      end: "o momento",
      model: "Remoto",
      period: "Tempo integral",
      description:
        "Atuo como desenvolvedor fullstack dando continuidade, refatorando ou aprimorando programas, sites e sistemas de clientes da Infinity.",
    },
  ];

  const acadExp: acadExp[] = [
    {
      id: 1,
      course: "Análise e Desenvolvimento de Sistemas",
      company: "Faculdade Descomplica",
      start: "fev de 2022",
      end: "o momento",
      description:
        "A graduação em ADS na Descomplica é um curso de tecnólogo que é focado em desenvolvimento de software.",
    },
    {
      id: 2,
      course: "Programador Fullstack Javascript",
      company: "OneBitCode",
      start: "fev de 2022",
      end: "set de 2023",
      description:
        "O curso programador fullstack javascript ensina do zero ao avançado conceitos sobre a linguagem e seu ecosistema de modo que o aluno ao final do curso possua um amplo conhecimento tanto com frontend quanto com backend.",
    },
    {
      id: 3,
      course: "Javascript e Typescript do básico ao avançado",
      company: "Udemy - Luiz Otávio Miranda",
      start: "set de 2023",
      end: "o momento",
      description:
        "Esse curso comtempla todo ecosistema do javascript aprofundando muito nos conceitos e utilizando ferramentas diversas para o aluno ter conhecimentos fullstack.",
    },
  ];

  return { profExp, acadExp };
}
