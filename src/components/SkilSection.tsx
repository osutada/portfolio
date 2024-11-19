import { motion } from "framer-motion";
import { Element } from "react-scroll";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Vue", level: 75 },
        { name: "CSS", level: 95 },
        { name: "HTML", level: 100 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 70 },
        { name: "Java", level: 60 },
        { name: "SQL", level: 85 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "UI/UX Design", level: 85 },
        { name: "Project Management", level: 75 },
        { name: "DevOps", level: 70 },
        { name: "Agile", level: 80 },
        { name: "Testing", level: 75 },
      ],
    },
  ];

  return (
    <>
      <Element
        name="skills"
        className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-10"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl text-center mb-16 font-light text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-medium mb-4 text-gray-800 dark:text-gray-200">
                  {skillCategory.category}
                </h3>
                <div className="w-full space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skill.name} className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-700 bg-gray-200 dark:text-gray-300 dark:bg-gray-700">
                            {skill.name}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-gray-700 dark:text-gray-300">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                        <motion.div
                          style={{ width: `${skill.level}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500 dark:bg-gray-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Element>
    </>
  );
}
