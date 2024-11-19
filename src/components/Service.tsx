import { motion } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
import { VscCode } from "react-icons/vsc";

export default function Service() {
  return (
    <>
      <div className="container m-5 px-4">
        <motion.h2
          className="text-4xl sm:text-5xl text-center mb-20 font-light text-gray-800 dark:text-gray-200"
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
              description:
                "お客様の要望をヒアリングし、現状の問題点を考いだし、解決方法をご提案します。",
            },
            {
              icon: FiMousePointer,
              title: "DESIGN",
              description:
                "ヒアリングに基づいたプランに沿って、デザインを作成します。",
            },
            {
              icon: VscCode,
              title: "CODING",
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
              <service.icon className="w-16 h-16 text-gray-700 dark:text-gray-300" />
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
