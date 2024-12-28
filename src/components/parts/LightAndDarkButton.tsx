import { isLightMode } from "@/components/utils/util";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function LightAndDarkButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getToggleTheme = (theme?: string): string => {
    return isLightMode(theme) ? "dark" : "light";
  };

  const toggleTheme = () => {
    setTheme(getToggleTheme(theme));
  };

  return (
    <>
      {mounted && (
        <motion.button
          onClick={toggleTheme}
          className="button-color p-2 rounded-full"
          aria-label={`${getToggleTheme(theme)} mode`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isLightMode(theme) ? <LuMoon size={20} /> : <LuSun size={20} />}
        </motion.button>
      )}
    </>
  );
}
