import { ChatMessage, sendMessageToOpenAI } from "@/api/openai";
import { useState } from "react";

export const useOpenAIChat = (model: string = "gpt-4") => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages); // ユーザーのメッセージを追加
    setInput(""); // 入力フィールドをリセット
    setIsLoading(true);

    try {
      const aiMessage = await sendMessageToOpenAI(updatedMessages, model);
      setMessages((prev) => [...prev, aiMessage]); // AIの応答を追加
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages, // 会話履歴
    input, // 現在の入力
    isLoading, // ローディング状態
    setInput, // 入力の更新関数
    handleSendMessage, // メッセージ送信関数
  };
};
