"use client";

import { motion, useAnimation } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Loading({ progress }: { progress: number }) {
  const controls = useAnimation();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    controls.start({ scaleX: progress });
  }, [progress, controls]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  const gradientStyle = {
    backgroundImage: isDarkMode
      ? `linear-gradient(to right, #E2E8F0 ${progress * 100}%, #718096 ${
          progress * 100
        }%)`
      : `linear-gradient(to right, #2D3748 ${progress * 100}%, #A0AEC0 ${
          progress * 100
        }%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-200">
      <motion.div
        className="text-4xl sm:text-7xl font-bold mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={gradientStyle}
      >
        OSUTADA
      </motion.div>
    </div>
  );
}
