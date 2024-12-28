"use client";

import ScrollLink from "@/components/layout/ScrollLink";
import Loading from "@/components/parts/Loading";
import HeroImage from "@/images/HeroImage.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
              <div className="absolute inset-0 object-cover w-full h-full opacity-20 z-0">
                <Image
                  src={HeroImage}
                  alt="hero image."
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="relative">
                <motion.h2
                  className="section-title-text-color text-5xl sm:text-7xl tracking-wide font-bold mb-2"
                  variants={itemVariants}
                >
                  OSUTADA
                </motion.h2>
                <motion.p className="section-text mb-6" variants={itemVariants}>
                  PORTFOLIO OF YUMA ENDO
                  <br />
                  WEB ENGINEER
                </motion.p>
                <ScrollLink key="header" to="about">
                  <motion.button
                    className="button-color py-2 px-6 rounded-full"
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
