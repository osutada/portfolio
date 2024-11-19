import { motion } from "framer-motion";
import { Element, Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <>
      <Element
        name="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h2
            className="text-7xl tracking-widest font-bold mb-4 text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            OSUTADA
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-gray-600 dark:text-gray-400 tracking-wider"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            PORTFOLIO OF YUMA ENDO
            <br />
            WEB ENGINEER
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
      </Element>
    </>
  );
}
