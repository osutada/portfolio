"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const sections = ["home", "about", "works", "skills", "contact"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
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
            <nav className="hidden md:flex space-x-8 items-center">
              {sections.map((item, index) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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
              {mounted && (
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-700 dark:bg-gray-200 text-gray-200 dark:text-gray-800"
                  aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
                  } mode`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {theme === "light" ? (
                    <LuMoon size={20} />
                  ) : (
                    <LuSun size={20} />
                  )}
                </motion.button>
              )}
            </nav>
            <div className="md:hidden flex items-center space-x-4">
              {mounted && (
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
                  } mode`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {theme === "light" ? (
                    <LuMoon size={20} />
                  ) : (
                    <LuSun size={20} />
                  )}
                </motion.button>
              )}
              <motion.button
                className="text-2xl text-gray-800 dark:text-gray-200"
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
        </div>
      </header>
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
    </>
  );
}
