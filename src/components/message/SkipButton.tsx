import { forwardRef } from 'react';

import { css } from '@emotion/react';

interface MessageBtnProps {
  onClick: () => void;
}

const SkipButton = forwardRef<HTMLButtonElement, MessageBtnProps>(({ onClick }, ref) => {
  return (
    <button css={messageBtnStyle} onClick={onClick} ref={ref}>
      Skip
    </button>
  );
});

export default SkipButton;

const messageBtnStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background-color: #ee735b;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.25);
  color: #fff;
  border: 1px solid #f75e43;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
