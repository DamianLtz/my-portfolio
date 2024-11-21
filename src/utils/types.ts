export interface IProject {
  order: number;
  image: string;
  title: string;
  year: number;
  description: string;
  designer?: string | undefined;
  designerLink?: string | undefined;
  dev?: string | undefined;
  devLink?: string | undefined;
  websiteLink: string;
  wip?: boolean;
}

export type TYear = {
  year: number;
};

export type TButton = {
  link?: string;
  content: string;
};
