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
  width: 35px;
  height: 35px;
  background-color: #ee735b;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  color: #fff;
  border: 1px solid #f75e43;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    width: 36px;
    height: 36px;
  }
`;
