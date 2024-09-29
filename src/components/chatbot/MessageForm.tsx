import React, { useState, useRef } from 'react';

import { css } from '@emotion/react';

import MessageBtn from './MessageBtn';
import MessageInput from './MessageInput';

interface MessageFormProps {
  onSendMessage: (message: string) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSendMessage }) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const messageBtnRef = useRef<HTMLButtonElement>(null);

  const isMessageEmpty = currentMessage.trim() === '';

  const handleSendMessage = () => {
    if (!isMessageEmpty) {
      onSendMessage(currentMessage);
      setCurrentMessage('');
    }
  };

  return (
    <div css={messageForm}>
      <MessageInput
        message={currentMessage}
        setMessage={setCurrentMessage}
        onEnterPress={handleSendMessage}
      />
      <MessageBtn ref={messageBtnRef} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MessageForm;
const messageForm = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  margin-bottom: 14px;
`;
