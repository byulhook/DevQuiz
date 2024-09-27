import dotenv from 'dotenv';
dotenv.config();

import OpenAI from 'openai';
import { ConversationManager, InMemoryStorage } from 'openai-memory';
import { INTERVIEW_PROMPT } from './interviewPrompts.js';

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
    { role: 'system', content: INTERVIEW_PROMPT },
  ],
});

export const sendInterviewMessage = async (conversationId, message) => {
  return await conversationManager.sendMessage(conversationId, message);
};