import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    console.log('Received messages:', messages);

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      temperature: 0.5,
      max_tokens: 1000,
    });

    console.log('OpenAI response:', response);
    res.json({ content: response.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API 호출 중 상세 오류:', error.response?.data || error.message);
    res.status(500).json({ error: '서버 오류가 발생했습니다.', details: error.response?.data || error.message });
  }
});

const PORT = process.env.PORT || 9004;
app.listen(PORT, () => console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`));