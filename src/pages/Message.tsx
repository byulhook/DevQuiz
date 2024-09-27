import { useState } from 'react';
import { css } from '@emotion/react';
import MessageArea from '../components/Message/MessageArea';
import MessageForm from '../components/Message/MessageForm';
import { getChatCompletion } from '../services/apiService';

interface Message {
  content: string;
  isUser: boolean;
}

const MessagePage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = { content: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const response = await getChatCompletion(message);
      const assistantMessage: Message = { content: response, isUser: false };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.log('오류 발생:', error);
      const errorMessage: Message = { content: '응답을 받을 수 없습니다.', isUser: false };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
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
  width: 100%;
`;
