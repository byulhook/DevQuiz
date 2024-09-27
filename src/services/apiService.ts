import axios from 'axios';

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || 'http://localhost:9004/api/chatbot';
const INTERVIEW_API_URL =
  import.meta.env.VITE_INTERVIEW_API_URL || 'http://localhost:9004/api/interview';

export async function getChatCompletion(message: string): Promise<string> {
  try {
    const response = await axios.post(CHAT_API_URL, { message });
    return response.data.content;
  } catch (error) {
    console.error('채팅 API 요청 중 오류 발생:', error);
    throw error;
  }
}

export async function getInterviewCompletion(message: string): Promise<string> {
  try {
    const response = await axios.post(INTERVIEW_API_URL, { message });
    return response.data.content;
  } catch (error) {
    console.error('인터뷰 API 요청 중 오류 발생:', error);
    throw error;
  }
}
