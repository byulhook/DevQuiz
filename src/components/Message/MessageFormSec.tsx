import React, { useState, useRef } from 'react';

import { css } from '@emotion/react';

import MessageBtn from './MessageBtn';
import MessageInput from './MessageInput';
import SkipButton from './SkipButton';

interface MessageFormProps {
  onSendMessage: (message: string) => void;
}

const MessageFormSec: React.FC<MessageFormProps> = ({ onSendMessage }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const messageBtnRef = useRef<HTMLButtonElement>(null);
  const SkipBtnRef = useRef<HTMLButtonElement>(null);

  const isMessageEmpty = currentMessage.trim() === '';

  const handleSendMessage = () => {
    if (!isMessageEmpty) {
      onSendMessage(currentMessage);
      setCurrentMessage('');
    }
  };

  const handleSkip = () => {};

  return (
    <div css={messageForm}>
      <MessageInput
        message={currentMessage}
        setMessage={setCurrentMessage}
        onEnterPress={handleSendMessage}
      />
      <SkipButton ref={SkipBtnRef} onClick={handleSkip} />
      <MessageBtn ref={messageBtnRef} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessageFormSec;

const messageForm = css`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  margin-bottom: 20px;
`;
