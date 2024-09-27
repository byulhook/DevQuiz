import { useState } from 'react';
import { css } from '@emotion/react';
import { v4 as uuidv4 } from 'uuid';
import MessageArea from '../components/Message/MessageArea';
import MessageFormSec from '../components/Message/MessageFormSec';
import { getInterviewCompletion } from '../services/apiService';

interface Message {
  content: string;
  isUser: boolean;
}

const SubjectiveQuiz = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId] = useState<string>(uuidv4());

  const handleSendMessage = async (message: string) => {
    const userMessage: Message = { content: message, isUser: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const responseContent = await getInterviewCompletion(message, conversationId);
      const assistantMessage: Message = { content: responseContent, isUser: false };
      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('오류 발생:', error);
      const errorMessage: Message = { content: '서버 응답을 받을 수 없습니다.', isUser: false };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div css={meetingContainer}>
      <MessageArea messages={messages} isLoading={isLoading} />
      <MessageFormSec onSendMessage={handleSendMessage} />
    </div>
  );
};

export default SubjectiveQuiz;

const meetingContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 90vh;
  width: 100%;
`;
