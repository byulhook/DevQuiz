import axios from 'axios';

// ChatMessage 인터페이스 추가
interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const API_URL = 'http://localhost:9004/api/chat';

export async function getChatCompletion(chatHistory: ChatMessage[]) {
  try {
    const response = await axios.post(API_URL, { messages: chatHistory });
    return response.data.content;
  } catch (error) {
    console.error('서버 요청 중 오류 발생:', error);
    throw error;
  }
}
