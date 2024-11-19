import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { VscCode } from "react-icons/vsc";
import { Element } from "react-scroll";

export default function ServiceSection() {
  return (
    <>
      <Element
        name="works"
        className="min-h-screen flex items-center justify-center p-10"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl text-center mb-16 font-light text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Service
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: HiOutlinePencil,
                title: "ディレクション",
                subtitle: "DIRECTION",
                description:
                  "お客様の要望をヒアリングし、現状の問題点を考いだし、解決方法をご提案します。",
              },
              {
                icon: FiMousePointer,
                title: "デザイン",
                subtitle: "DESIGN",
                description:
                  "ヒアリングに基づいたプランに沿って、デザインを作成します。",
              },
              {
                icon: VscCode,
                title: "コーディング",
                subtitle: "CODING",
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
                viewport={{ once: true }}
              >
                <service.icon className="w-16 h-16 text-gray-700 dark:text-gray-300" />
                <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.subtitle}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Element>
    </>
  );
}
