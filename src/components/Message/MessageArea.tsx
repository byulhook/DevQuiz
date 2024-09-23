import React, { useRef, useEffect, useState } from 'react';

import styled from '@emotion/styled';

import User from './User';
import Loading from '../Loading';
import TypingAnimation from './Typing';

interface Message {
  content: string;
  isUser: boolean;
}

interface MessageAreaProps {
  messages: Message[];
  isLoading: boolean;
}

const MessageArea: React.FC<MessageAreaProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 100;
      setIsScrolledToBottom(isBottom);
    }
  };

  useEffect(() => {
    if (isScrolledToBottom) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <MessageContainer ref={scrollRef} onScroll={handleScroll}>
      {messages.map((message, index) => {
        const lines = message.content.split('\n');
        return (
          <MessageBubble key={index}>
            <User isAI={!message.isUser} />
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
        <MessageBubble>
          <User isAI={true} />
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        </MessageBubble>
      )}
    </MessageContainer>
  );
};

const MessageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
`;

const MessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 30px;
`;

const MessageContent = styled.div<{ isUser: boolean }>`
  color: #666;
  padding-left: 46px;
  max-width: 100%;
  word-wrap: break-word;
  border-radius: 8px;
  white-space: pre-wrap;
  align-self: flex-start;
`;

const LoadingContainer = styled.div`
  background-color: #f9fbfc;
  padding: 10px 0 0 46px;
  align-self: flex-start;
`;
export default MessageArea;
