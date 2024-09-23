import { SendHorizontal } from 'lucide-react';
import { css } from '@emotion/react';
import { forwardRef } from 'react';

interface MessageBtnProps {
  onSendMessage: () => void;
}

const MessageBtn = forwardRef<HTMLButtonElement, MessageBtnProps>(({ onSendMessage }, ref) => {
  return (
    <button css={messageBtnStyle} onClick={onSendMessage} ref={ref}>
      <SendHorizontal size={28} />
    </button>
  );
});

export default MessageBtn;

const messageBtnStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background-color: #EE735B;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  color: #fff;
  border: 1px solid #F75E43;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

