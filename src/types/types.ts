export type Technologies = {
  frontend: string[];
  backend: string[];
  tooling: string[];
};

export type Project = {
  id: string;
  date: string;
  title: string;
  description: string;
  technologies: string[];
  href?: string;
  images?: string[];
  imageAspect?: "video" | "portrait" | "square";
  inProgress?: boolean;
};
