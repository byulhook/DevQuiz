import React, { useState, useRef, ChangeEvent, useEffect } from 'react';

import styled from '@emotion/styled';

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  onEnterPress: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ message, setMessage, onEnterPress }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
      e.preventDefault();
      onEnterPress();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const isActiveInput = () => isFocused || message.trim().length > 0;

  return (
    <InputContainer isActive={isActiveInput()}>
      <ContentWrapper>
        <StyledTextarea
          ref={textareaRef}
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          placeholder={isFocused ? '' : '답변을 입력해주세요.'}
          rows={1}
        />
      </ContentWrapper>
    </InputContainer>
  );
};

const InputContainer = styled.div<{ isActive: boolean }>`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.isActive ? '#EE735B' : '#E0E2E4')};
  box-shadow: ${(props) => (props.isActive ? '0 0 0 1px #FDDDD9' : 'none')};
  background-color: ${(props) => (props.isActive ? '#FFFFFF' : '#FFFFFF')};
  color: ${(props) => (props.isActive ? '#6C6B72' : '#B2B2B2')};
`;

const ContentWrapper = styled.div`
  min-height: 20px;
  max-height: 150px;
  overflow-y: auto;
  padding: 10px;
  margin: 4px 0 0 0;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 20px;
  max-height: 150px;
  border: none;
  background-color: transparent;
  color: inherit;
  font-size: 16px;
  font-weight: 500;
  resize: none;
  outline: none;
  overflow-y: hidden;
  white-space: pre-wrap;

  &::placeholder {
    color: inherit;
  }
`;

export default MessageInput;
