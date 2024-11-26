import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { VscCode } from "react-icons/vsc";

export default function Service() {
  return (
    <>
      <div className="container m-5 px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Service
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            {
              icon: HiOutlinePencil,
              title: "DIRECTION",
              portfolio: "portfolio-1",
              portfolioDesc: "portfolio-1",
              description:
                "お客様の要望をヒアリングし、現状の問題点を考いだし、解決方法をご提案します。",
            },
            {
              icon: FiMousePointer,
              title: "DESIGN",
              portfolio: "portfolio-2",
              portfolioDesc: "portfolio-2",
              description:
                "ヒアリングに基づいたプランに沿って、デザインを作成します。",
            },
            {
              icon: VscCode,
              title: "CODING",
              portfolio: "portfolio-3",
              portfolioDesc: "portfolio-3",
              description:
                "デザインの意図を理解し、動きや効果を適切に使用することでWebサイトの仕上がりは大きく変わります。",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <service.icon className="w-14 h-14 md:w-16 md:h-16 text-gray-700 dark:text-gray-300" />
              <h3 className="section-subtitle">{service.title}</h3>
              <p className="section-text">{service.description}</p>
              <motion.div
                key={"1"}
                className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-48"></div>
                <div className="p-5 text-left">
                  <h3 className="section-subtitle">{service.portfolio}</h3>
                  <p className="section-text">{service.portfolioDesc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
