import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';
import { ConversationManager, InMemoryStorage } from 'openai-memory';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const conversationManager = new ConversationManager({
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4o-mini',
  temperature: 0.5,
  max_tokens: 1000,
  storage: new InMemoryStorage(),
  initialMessages: [
    { role: 'system', content: '당신은 유용한 어시스턴트입니다.' },
  ],
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const conversationId = 'hardcoded-user-id'; // 하드코딩된 유저 ID

    if (!message) {
      return res.status(400).json({ error: 'message가 필요합니다.' });
    }

    const reply = await conversationManager.sendMessage(conversationId, message);
    res.json({ content: reply });
  } catch (error) {
    console.error('서버 오류:', error);
    res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
});

const PORT = process.env.PORT || 9004;
app.listen(PORT, () => console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`));
