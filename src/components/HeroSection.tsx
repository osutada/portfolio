import { motion } from "framer-motion";
import { Element, Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <>
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
    </>
  );
}
