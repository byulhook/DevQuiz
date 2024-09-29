import dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';
import { ConversationManager, InMemoryStorage } from 'openai-memory';
import { CHATBOT_PROMPT } from './chatbotPrompts.js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const conversationManager = new ConversationManager({
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4o-mini',
  temperature: 0.4,
  max_tokens: 600,
  storage: new InMemoryStorage(),
  initialMessages: [
    { role: 'system', content: CHATBOT_PROMPT },
  ],
});

export const sendChatbotMessage = async (conversationId, message) => {
  return await conversationManager.sendMessage(conversationId, message);
};