import aboutMeImg from "@/images/aboutMe.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BsTranslate } from "react-icons/bs";

export default function About() {
  const [language, setLanguage] = useState<"EN" | "JP">("EN");
  const changeLanguage = (language: string): "EN" | "JP" => {
    return language === "EN" ? "JP" : "EN";
  };

  function calculateYearsSince(
    startYear: number,
    startMonth = 0,
    startDay = 1
  ) {
    const startDate = new Date(startYear, startMonth, startDay);
    const today = new Date();
    let yearsElapsed = today.getFullYear() - startDate.getFullYear();
    if (
      today.getMonth() < startDate.getMonth() ||
      (today.getMonth() === startDate.getMonth() &&
        today.getDate() < startDate.getDate())
    ) {
      yearsElapsed--;
    }

    return yearsElapsed;
  }

  // 2018/06/15~~
  const yearsOfExperience = calculateYearsSince(2018, 5, 15);

  const content = {
    EN: {
      paragraph1: `I'm a web developer aiming to become a 'do-it-all engineer.' 
      My journey in web development began ${yearsOfExperience} years ago, and since then, I've had the opportunity to work on a wide range of projects, from small business websites to large-scale web applications. 
      I focus on design and clean, efficient code to create engaging and user-friendly web experiences.`,
      paragraph2: `When I'm not coding, you'll find me immersed in gaming. 
        I enjoy solving coding challenges like clearing stages in a game, always leveling up my skills. 
        I'm excited to take on new challenges in the ever-evolving world of web development.`,
    },
    JP: {
      paragraph1: `私は“なんでもできるエンジニア”を目指しているWebエンジニアです。
      Web開発の旅は${yearsOfExperience}年前に始まり、小規模なビジネスサイトから大規模なWebアプリケーションまで、さまざまなプロジェクトに携わってきました。
      デザインへのこだわりとクリーンで効率的なコードを大切にし、魅力的で使いやすいWeb体験を提供することを目標としています。 `,
      paragraph2: `私の趣味はゲームですが、コーディングの課題やプロジェクトに取り組むことはゲームのランクを上げる過程と似ており、日々楽しみながら学び続けています。
        これからも新たな挑戦を通じて最高ランクを目指していきます。`,
    },
  };

  return (
    <>
      <div className="container m-1 px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="mb-4">
              <h3 className="section-subtitle mb-2">
                Hello, I&apos;m Yuma Endo.
              </h3>
              <p className="section-text mb-6">
                {content[language].paragraph1}
              </p>
              <p className="section-text">{content[language].paragraph2}</p>
            </div>
            <button
              onClick={() => setLanguage(changeLanguage(language))}
              className="button-color px-4 py-2 flex justify-center rounded shadow-lg"
            >
              <BsTranslate className="mr-3 mt-1" />
              {language === "EN" ? "日本語" : "English"}
            </button>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <div className="w-full h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={aboutMeImg}
                alt="aboutMe"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
