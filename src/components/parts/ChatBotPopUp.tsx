"use client";

import LineChatbot from "@/components/parts/ChatBot";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setShowChatBotPopup] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setShowChatBotPopup(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {mounted && (
        <div className="fixed bottom-6 left-3 z-50">
          {isOpen && (
            <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out">
              <div className="flex justify-between items-center bg-green-500 text-white p-2">
                <h2 className="text-lg font-semibold">お問い合わせ</h2>
                <button
                  onClick={toggleChatbot}
                  className="p-1 hover:bg-green-600 rounded"
                  aria-label="チャットを閉じる"
                >
                  <X size={20} />
                </button>
              </div>
              <LineChatbot />
            </div>
          )}
          <motion.button
            onClick={toggleChatbot}
            className={`bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <MessageCircle size={24} />
          </motion.button>
        </div>
      )}
    </>
  );
}
