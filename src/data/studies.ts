export const studies = [
  {
    title: "Licence d'Excellence – Intelligence Artificielle",
    institution: "Université Hassan II de Casablanca, Faculté des Sciences Ben M'Sick",
    description:
      "Advanced study in AI and applied computer science, building on a full-stack foundation with a focus on intelligent systems and data-driven approaches.",
    tags: ["Intelligence Artificielle", "Python", "Algorithmique", "Data Science"],
  },
  {
    title: "DTS – Développement Web Full-Stack",
    institution: "Institut de formation aux métiers de l'offshoring des TIC et de l'audiovisuel, Fès",
    description:
      "Two-year technical degree covering web development fundamentals through to full-stack projects: backend APIs, frontend frameworks, databases, and collaborative workflows with Git.",
    tags: ["PHP", "JavaScript", "React", "MySQL", "Git"],
  },
];

export type StudyItem = (typeof studies)[number];
