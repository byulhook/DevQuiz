import { forwardRef } from 'react';

import { css } from '@emotion/react';
import { SendHorizontal } from 'lucide-react';

interface MessageBtnProps {
  onSendMessage: () => void;
}

const MessageBtn = forwardRef<HTMLButtonElement, MessageBtnProps>(({ onSendMessage }, ref) => {
  return (
    <button css={messageBtnStyle} onClick={onSendMessage} ref={ref}>
      <SendHorizontal size={20} />
    </button>
  );
});

export default MessageBtn;

const messageBtnStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: #ff7b61;
  color: #fff;

  border: 1px solid #f75e43;
  border-radius: 14px;

  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
