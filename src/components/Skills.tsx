"use client";

import { motion } from "framer-motion";
import { FaStar as Star } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 5 },
        { name: "TypeScript", level: 5 },
        { name: "Vue.js", level: 4 },
        { name: "HTML / CSS", level: 4 },
        { name: "jQuery", level: 3 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Go", level: 5 },
        { name: "Java", level: 4 },
        { name: "PHP", level: 3 },
        { name: "Node.js", level: 3 },
        { name: "SQL", level: 4 },
      ],
    },
    {
      category: "Infrastructure",
      items: [
        { name: "AWS", level: 4 },
        { name: "GCP", level: 2 },
        { name: "Microsoft Azure", level: 3 },
        { name: "Docker", level: 4 },
        { name: "Kubernetes", level: 3 },
      ],
    },
  ];

  return (
    <div className="container m-5 px-6">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillCategory, categoryIndex) => (
          <motion.div
            key={skillCategory.category}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: false }}
          >
            <h3 className="section-subtitle mb-2">{skillCategory.category}</h3>
            <div className="w-full space-y-4">
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skill.name} className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="section-text">{skill.name}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.1 + star * 0.05,
                          }}
                          viewport={{ once: false }}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= skill.level
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
