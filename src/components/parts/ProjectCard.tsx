import type { ProjectCardProps } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer rounded-lg section-backgrount-color-reverse"
      whileHover={{ scale: 1.04 }}
      onClick={() => onOpen(project)}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        className="object-cover w-full h-96 bg-black"
        loading="eager"
      />
      <div className="p-5">
        <h3 className="section-subtitle-reverse">{project.title}</h3>
      </div>
    </motion.div>
  );
}
