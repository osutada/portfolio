"use client";

import ScrollLink from "@/components/layout/ScrollLink";
import Loading from "@/components/parts/Loading";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 1) {
          clearInterval(timer);
          setIsLoading(false);
          return 1;
        }
        return prevProgress + 0.01;
      });
    }, 14);

    return () => clearInterval(timer);
  }, []);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <Loading key="loading" progress={progress} />
        ) : (
          <motion.div key="content" initial="hidden" animate="visible">
            <div className="container mx-auto px-4 text-center z-10">
              <video
                className="absolute inset-0 object-cover w-full h-full opacity-20 z-0"
                autoPlay
                loop
                muted
              >
                <source src="/images/SECTION_VIDEO.mp4" type="video/mp4" />
              </video>
              <div className="relative">
                <motion.h2
                  className="text-4xl sm:text-7xl tracking-wide font-bold mb-4 text-gray-800 dark:text-gray-200"
                  variants={itemVariants}
                >
                  OSUTADA
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg mb-8 text-gray-600 dark:text-gray-400 tracking-wider"
                  variants={itemVariants}
                >
                  PORTFOLIO OF YUMA ENDO
                  <br />
                  WEB ENGINEER
                </motion.p>
                <ScrollLink key="header" to="about">
                  <motion.button
                    className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 py-2 px-6 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
                    variants={itemVariants}
                  >
                    Learn More
                  </motion.button>
                </ScrollLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
