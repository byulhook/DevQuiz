import { sendInterviewMessage } from './interviewService.js';

export const handleInterview = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'message가 필요합니다.' });
    }

    // 고유한 대화 ID 생성 로직 추가
    const conversationId = req.headers['conversation-id'] || `interview-${Date.now()}`;

    const reply = await sendInterviewMessage(conversationId, message);
    res.json({ content: reply });
  } catch (error) {
    console.error('인터뷰 서버 오류:', error);
    res.status(500).json({ error: '인터뷰 서버 오류가 발생했습니다.' });
  }
};