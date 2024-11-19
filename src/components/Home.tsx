import ScrollLink from "@/components/layout/ScrollLink";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h2
          className="text-4xl sm:text-6xl tracking-wide font-bold mb-4 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          OSUTADA
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg mb-8 text-gray-600 dark:text-gray-400 tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          PORTFOLIO OF YUMA ENDO
          <br />
          WEB ENGINEER
        </motion.p>
        <ScrollLink key="header" to="about">
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
    </>
  );
}
