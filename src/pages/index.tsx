"use client";

import Contact from "@/components/Contact";
import ResumeDownload from "@/components/ResumeDownload";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FiMousePointer } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { VscCode } from "react-icons/vsc";
import {
  Element,
  animateScroll as scroll,
  Link as ScrollLink,
} from "react-scroll";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const sections = ["home", "about", "works", "skills", "contact"];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Header */}
      <header className="py-4 bg-opacity-80 backdrop-filter backdrop-blur-lg fixed top-0 left-0 right-0 z-50 p-3 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-3xl font-bold text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              OSUTADA
            </motion.h1>
            <nav className="hidden md:flex space-x-8">
              {sections.map((item, index) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.span>
                </ScrollLink>
              ))}
            </nav>
            <motion.button
              className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              ☰
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-800 py-2 fixed top-16 left-0 right-0 z-40 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-2">
              {sections.map((item, index) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.span>
                </ScrollLink>
              ))}
            </nav>
          </div>
        </motion.div>
      )}

      {/* Home Section */}
      <Element
        name="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h2
            className="text-6xl tracking-wide font-bold mb-4 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Osutada&apos;s Portfolio
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Scroll down to explore my work and skills
          </motion.p>
          <ScrollLink to="about" smooth={true} duration={500}>
            <motion.button
              className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Learn More
            </motion.button>
          </ScrollLink>
        </div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-300 dark:bg-gray-600 rounded-full"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      </Element>

      {/* About Section */}
      <Element
        name="about"
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
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Hi, I&apos;m [Your Name]
              </h3>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                I&apos;m a passionate web developer with expertise in modern
                frontend technologies. With a keen eye for design and a love for
                clean, efficient code, I strive to create engaging and
                user-friendly web experiences.
              </p>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                My journey in web development started [X] years ago, and since
                then, I&apos;ve had the opportunity to work on diverse projects,
                from small business websites to large-scale web applications.
              </p>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                When I&apos;m not coding, you can find me [your hobbies or
                interests]. I believe in continuous learning and am always
                excited to take on new challenges in the ever-evolving world of
                web development.
              </p>
              <ResumeDownload />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-[400px] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/img/aboutMe.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  height={400}
                  width={300}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Element>

      {/* Works Section */}
      <Element
        name="works"
        className="min-h-screen flex items-center justify-center p-10"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl text-center mb-16 font-light text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Service
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: HiOutlinePencil,
                title: "ディレクション",
                subtitle: "DIRECTION",
                description:
                  "お客様の要望をヒアリングし、現状の問題点を考いだし、解決方法をご提案します。",
              },
              {
                icon: FiMousePointer,
                title: "デザイン",
                subtitle: "DESIGN",
                description:
                  "ヒアリングに基づいたプランに沿って、デザインを作成します。",
              },
              {
                icon: VscCode,
                title: "コーディング",
                subtitle: "CODING",
                description:
                  "デザインの意図を理解し、動きや効果を適切に使用することでWebサイトの仕上がりは大きく変わります。",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="flex flex-col items-center space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <service.icon className="w-16 h-16 text-gray-700 dark:text-gray-300" />
                <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.subtitle}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Element>

      {/* Skills Section */}
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

      {/* Contact Section */}
      <Element
        name="contact"
        className="min-h-screen flex items-center justify-center p-10"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl text-center mb-16 font-light text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <Contact />
        </div>
      </Element>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              &copy; 2024 OSUTADA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </div>
  );
}
