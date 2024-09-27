import axios from 'axios';

const API_URL = 'http://localhost:9004/api/chat';

export async function getChatCompletion(message: string): Promise<string> {
  try {
    const response = await axios.post(API_URL, { message });
    return response.data.content;
  } catch (error) {
    console.error('서버 요청 중 오류 발생:', error);
    throw error;
  }
}
