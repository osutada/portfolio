import type { ProjectCardProps } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden cursor-pointer rounded-lg section-backgrount-color-reverse"
      whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
      onClick={() => onOpen(project)}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        className="object-cover w-full h-70 bg-black"
      />
      <div className="p-4">
        <h3 className="section-subtitle-reverse">{project.title}</h3>
      </div>
    </motion.div>
  );
}
