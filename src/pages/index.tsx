"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScrollTopButton from "@/components/ScrollTopButton";
import ServiceSection from "@/components/ServiceSection";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
