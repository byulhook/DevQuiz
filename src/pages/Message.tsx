import { useState } from 'react';

import { css } from '@emotion/react';

import MessageArea from '../components/Message/MessageArea';
import MessageForm from '../components/Message/MessageForm';
import { useChatHistory } from '../hooks/useChatHistory';
import { getChatCompletion } from '../services/openai';
import { ChatMessage } from '../types/chat';

interface Message {
  content: string;
  isUser: boolean;
}

const MessagePage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const { addUserMessage, addAssistantMessage, getChatHistoryWithNewMessage } = useChatHistory();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = { content: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    addUserMessage(message);
    setIsLoading(true);

    try {
      const newChatHistory: ChatMessage[] = getChatHistoryWithNewMessage(message);
      const response = await getChatCompletion(newChatHistory);

      if (response !== null) {
        const assistantMessage: Message = { content: '', isUser: false };
        setMessages((prevMessages) => [...prevMessages, assistantMessage]);
        addAssistantMessage(response);
        setIsLoading(false);

        setTimeout(() => {
          setMessages((prevMessages) =>
            prevMessages.map((msg, index) =>
              index === prevMessages.length - 1 ? { ...msg, content: response } : msg,
            ),
          );
        }, 100);
      } else {
        const errorMessage: Message = { content: '응답을 받을 수 없습니다.', isUser: false };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('오류 발생:', error);
      const errorMessage: Message = { content: '죄송합니다. 오류가 발생했습니다.', isUser: false };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      setIsLoading(false);
    }
  };

  return (
    <div css={meetingContainer}>
      <MessageArea messages={messages} isLoading={isLoading} />
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessagePage;

const meetingContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
