import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl sm:text-5xl text-center mb-16 font-light text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Contact
        </motion.h2>
        <motion.form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScIvzbA5jZUSnQXs9jm0RJ9UJboVQCTLB2jystNqtzwRwYmtQ/formResponse"
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="entry.239822804"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              placeholder="What is your name?"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="entry.1578697554"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="entry.945498449"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            {"Send Message"}
          </button>
        </motion.form>
      </div>
    </>
  );
}
