"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const url =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScIvzbA5jZUSnQXs9jm0RJ9UJboVQCTLB2jystNqtzwRwYmtQ/formResponse";

    // Map your form fields to Google Form field names
    const googleFormData = new FormData();
    googleFormData.append("entry.239822804", formData.get("name") as string);
    googleFormData.append("entry.1578697554", formData.get("email") as string);
    googleFormData.append("entry.945498449", formData.get("message") as string);

    try {
      // Using fetch with no-cors mode as Google Forms doesn't support CORS
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center p-8">
        <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-4">
          Thank you for your message!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          We will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
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
          name="name"
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
          name="email"
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
          name="message"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
          placeholder="Leave a comment..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}
