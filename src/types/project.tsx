import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: StaticImageData;
  url?: string;
}

export interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}
