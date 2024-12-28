import { Project } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="section-backgrount-color-reverse relative w-full max-w-2xl p-8 rounded-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-full mb-4 rounded-lg bg-black"
        />
        <h2 className="section-subtitle-reverse">{project.title}</h2>
        <p className="section-text-reverse">{project.description}</p>
        {project.url && (
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            <hr className="my-4 border-gray-300 dark:border-gray-700" />
            <p className="section-text-reverse">{project.url}</p>
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
}
