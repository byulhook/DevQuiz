import { useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';
import MessageArea from './MessageArea';
import MessageForm from './MessageForm';
import MessageHeader from './MessageHeader';
import { getChatCompletion } from '../../services/apiService';

interface Message {
  content: string;
  isUser: boolean;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId] = useState<string>(uuidv4());

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = { content: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const responseContent = await getChatCompletion(message, conversationId);
      const assistantMessage: Message = { content: responseContent, isUser: false };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('오류 발생:', error);
      const errorMessage: Message = { content: '챗봇 응답을 받을 수 없습니다.', isUser: false };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div css={chatBotContainer}>
      <MessageHeader />
      <div css={messagesContainer}>
        <MessageArea messages={messages} isLoading={isLoading} />
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatBot;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const chatBotContainer = css`
  position: fixed;
  bottom: 100px;
  align-items: center;
  right: 30px;
  width: 400px;
  height: 600px;
  background-color: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 26px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  animation: ${fadeInUp} 0.3s ease-out;
`;

const messagesContainer = css`
  width: 400px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;
