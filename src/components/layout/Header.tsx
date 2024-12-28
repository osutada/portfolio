"use client";

import ScrollLink from "@/components/layout/ScrollLink";
import LightAndDarkButton from "@/components/parts/LightAndDarkButton";
import CommonMeta from "@/components/parts/MetaData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Header() {
  const sections = [
    "home",
    "about",
    "service",
    "skills",
    "projects",
    "contact",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <CommonMeta title={"OSUTADA"} />
      <header className="py-4 p-2 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between md:justify-end items-center space-x-8">
            <div className="md:hidden">
              <motion.button
                className="section-title-text-color p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <LuMenu size={24} />
              </motion.button>
            </div>
            <nav className="hidden md:flex space-x-6 items-center">
              {sections.map((item, index) => (
                <ScrollLink
                  key={item}
                  to={item}
                  className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.span>
                  <div className="bg-gray-800 dark:bg-gray-200 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </ScrollLink>
              ))}
            </nav>
            <LightAndDarkButton />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-900 z-50 md:hidden"
            initial={{ clipPath: "circle(0% at top left)" }}
            animate={{ clipPath: "circle(150% at top left)" }}
            exit={{ clipPath: "circle(0% at top left)" }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 dark:text-gray-200 p-2 w-1/3 pl-5"
                  aria-label="Close"
                >
                  <LuX size={24} />
                </button>
                <div className="flex justify-center text-xl font-semibold text-gray-800 dark:text-gray-200 w-1/3">
                  Menu
                </div>
              </div>
              <nav className="flex-1 overflow-y-auto">
                <div className="container mx-auto px-5 py-6">
                  {sections.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b border-gray-200 dark:border-gray-700"
                    >
                      <ScrollLink
                        key={item}
                        to={item}
                        className="block py-4 px-6 text-lg text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </ScrollLink>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
