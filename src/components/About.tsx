import ResumeDownload from "@/components/parts/ResumeDownload";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl sm:text-5xl text-center mb-16 font-light text-gray-800 dark:text-gray-200"
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
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Hi, I&apos;m [Your Name]
            </h3>
            <p className="text-base sm:text-lg mb-4 text-gray-600 dark:text-gray-400">
              I&apos;m a passionate web developer with expertise in modern
              frontend technologies. With a keen eye for design and a love for
              clean, efficient code, I strive to create engaging and
              user-friendly web experiences.
            </p>
            <p className="text-base sm:text-lg mb-4 text-gray-600 dark:text-gray-400">
              My journey in web development started [X] years ago, and since
              then, I&apos;ve had the opportunity to work on diverse projects,
              from small business websites to large-scale web applications.
            </p>
            <p className="text-base sm:text-lg mb-4 text-gray-600 dark:text-gray-400">
              When I&apos;m not coding, you can find me [your hobbies or
              interests]. I believe in continuous learning and am always excited
              to take on new challenges in the ever-evolving world of web
              development.
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
                src="/images/aboutMe.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
                height={400}
                width={300}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
