import cors from 'cors';
import express from 'express';
import { handleChatbot } from './service/chatbot/chatbotController.js';
import { handleInterview } from './service/interview/javascript/Controller.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chatbot', handleChatbot);
app.post('/api/interview', handleInterview);

const PORT = process.env.PORT || 9004;
app.listen(PORT, () => console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`));