export type Technologies = {
  frontend: string[];
  backend: string[];
  tooling: string[];
};

export type Project = {
  id: string;
  index: string;
  date: string;
  title: string;
  description: string;
  technologies: string[];
  href: string;
};
