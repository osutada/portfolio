"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import ScrollTopButton from "@/components/parts/ScrollTopButton";
import Service from "@/components/Service";
import Skills from "@/components/Skills";

export default function Component() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <Header />
        <Section name="home">
          <Home />
        </Section>
        <Section name="about" className="bg-white dark:bg-gray-900">
          <About />
        </Section>
        <Section name="service">
          <Service />
        </Section>
        <Section name="skills" className="bg-white dark:bg-gray-900">
          <Skills />
        </Section>
        <Section name="contact">
          <Contact />
        </Section>
        <Footer />
        <ScrollTopButton />
      </div>
    </>
  );
}
