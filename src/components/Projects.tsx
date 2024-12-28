import ProjectCard from "@/components/parts/ProjectCard";
import ProjectModal from "@/components/parts/ProjectModal";
import { isLightMode } from "@/components/utils/util";
import noImage from "@/images/noimage.png";
import noImageGray from "@/images/noimageGray.png";
import xlogo from "@/images/Xlogo.png";
import { Project } from "@/types/project";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Projects() {
  const { theme } = useTheme();

  const projects: Project[] = [
    {
      id: "1",
      title: "AI_TweetBot",
      description:
        "OpenAI GPT-4o-mini powered Twitter bot that generates tweets based on user input.",
      imageUrl: xlogo,
      url: "https://x.com/osutada_x",
    },
    {
      id: "2",
      title: "None",
      description: "None",
      imageUrl: isLightMode(theme) ? noImageGray : noImage,
    },
    {
      id: "3",
      title: "None",
      description: "None",
      imageUrl: isLightMode(theme) ? noImageGray : noImage,
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  return (
    <>
      <div className="container m-6 px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Projects
        </motion.h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  x: parseInt(project.id) % 2 === 0 ? 50 : -50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={openModal}
                />
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
