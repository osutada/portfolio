"use client";

import { useOpenAIChat } from "@/hooks/useOpenAIChat";
import { Send } from "lucide-react";
import { useEffect, useRef } from "react";

export default function LineChatbot() {
  // useOpenAIChat フックを利用
  const { messages, input, isLoading, setInput, handleSendMessage } =
    useOpenAIChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // チャットビューを下にスクロール
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-[21rem] bg-gray-100">
      {/* チャットメッセージ表示エリア */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {/* ローディングインジケーター */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 rounded-lg p-3">
              <LoadingDots />
            </div>
          </div>
        )}
        {/* 自動スクロール用のダミー要素 */}
        <div ref={messagesEndRef} />
      </div>

      {/* 入力フォーム */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-4 bg-white border-t border-gray-200"
      >
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-1 rounded-full py-2 px-4 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}

// ローディング中のアニメーション
function LoadingDots() {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
          style={{ animationDelay: `${index * 0.15}s` }}
        />
      ))}
    </div>
  );
}
