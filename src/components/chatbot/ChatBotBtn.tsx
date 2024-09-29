import { useState } from 'react';
import { css } from '@emotion/react';
import { X } from 'lucide-react';
import ChatBot from './ChatBot';
import logo from '../../assets/logo.png';

const ChatBotBtn = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleClick} css={isActive ? activeButtonStyle : buttonStyle}>
        {isActive ? (
          <X color="#444" size={28} strokeWidth={2} />
        ) : (
          <img css={chatBotBtnStyle} src={logo} alt="ChatBot 버튼" draggable={false} />
        )}
      </button>
      {isActive && <ChatBot />}
    </>
  );
};

export default ChatBotBtn;

const buttonStyle = css`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  transition:
    transform 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const activeButtonStyle = css`
  ${buttonStyle};
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  transform: scale(1);
`;

const chatBotBtnStyle = css`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  transition: opacity 0.2s ease-in-out;
`;
