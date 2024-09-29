import React from 'react';
import styled from '@emotion/styled';

import Loading from '../Loading';
import TypingAnimation from '../message/Typing';

interface Message {
  content: string;
  isUser: boolean;
}

interface MessageAreaProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageArea: React.FC<MessageAreaProps> = ({ messages, isLoading }) => {
  return (
    <MessageContainer>
      {messages.map((message, index) => {
        const lines = message.content.split('\n');
        return (
          <MessageBubble key={index} isUser={message.isUser}>
            {!message.isUser}
            <MessageContent isUser={message.isUser}>
              {message.isUser ? (
                lines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < lines.length - 1 && <br />}
                  </React.Fragment>
                ))
              ) : (
                <TypingAnimation text={message.content} />
              )}
            </MessageContent>
          </MessageBubble>
        );
      })}
      {isLoading && (
        <MessageBubble isUser={false}>
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        </MessageBubble>
      )}
    </MessageContainer>
  );
};

export default MessageArea;

const MessageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  display: flex;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  width: fit-content;
  max-width: 90%;
  margin-bottom: 20px;
  flex-direction: column;
`;

const MessageContent = styled.div<{ isUser: boolean }>`
  background: ${(props) => (props.isUser ? 'linear-gradient(90deg, #FF7761, #FF7662)' : '#F9F9F9')};
  color: ${(props) => (props.isUser ? '#fff' : '#666')};
  font-weight: 400;
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 16px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const LoadingContainer = styled.div`
  padding: 10px 14px;
  border-radius: 18px;
  max-width: 80%;
  align-self: flex-start;
`;
