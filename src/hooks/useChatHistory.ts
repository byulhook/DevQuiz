import { useState, useCallback } from 'react';

import { SYSTEM_PROMPT } from '../../server/prompts';
import { ChatMessage } from '../types/chat';

export function useChatHistory() {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: 'system', content: SYSTEM_PROMPT },
  ]);

  const addUserMessage = useCallback((message: string) => {
    setChatHistory((prevHistory) => [...prevHistory, { role: 'user', content: message }]);
  }, []);

  const addAssistantMessage = useCallback((message: string) => {
    setChatHistory((prevHistory) => [...prevHistory, { role: 'assistant', content: message }]);
  }, []);

  const getChatHistoryWithNewMessage = useCallback(
    (message: string): ChatMessage[] => {
      return [...chatHistory, { role: 'user', content: message }];
    },
    [chatHistory],
  );

  return {
    chatHistory,
    addUserMessage,
    addAssistantMessage,
    getChatHistoryWithNewMessage,
  };
}
