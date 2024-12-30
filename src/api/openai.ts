const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "***";

// メッセージの型定義
export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

// APIレスポンスの型定義
export type OpenAIResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    message: ChatMessage;
    finish_reason: string;
    index: number;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

/**
 * OpenAI APIにメッセージを送信して応答を取得する関数
 * @param {ChatMessage[]} messages - チャット履歴。各メッセージは { role: 'user' | 'assistant' | 'system', content: string } の形式。
 * @param {string} model - 使用するモデル (デフォルト: gpt-4)。
 * @returns {Promise<ChatMessage>} - AIの応答オブジェクト。
 */
export async function sendMessageToOpenAI(
  messages: ChatMessage[],
  model: string = "gpt-4"
): Promise<ChatMessage> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`, // APIキーをヘッダーに追加
      },
      body: JSON.stringify({
        model,
        messages,
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data: OpenAIResponse = await response.json();
    return data.choices[0].message; // AIの応答
  } catch (error) {
    console.error("Error in sendMessageToOpenAI:", error);
    throw error;
  }
}
