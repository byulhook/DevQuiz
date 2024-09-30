import { css } from '@emotion/react';
import logo from '../../assets/logo.png';

const MessageHeader = () => {
  return (
    <div css={MessageHeaderContainer}>
      <img src={logo} alt="logo" />
      <p>DevQuiz AI</p>
    </div>
  );
};

export default MessageHeader;

const MessageHeaderContainer = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 60px;

  margin-left: 60px;
  z-index: 10;

  img {
    width: 34px;
    height: 34px;
    border-radius: 12px;
    margin-right: 10px;
  }
  p {
    font-size: 18px;
    font-weight: 700;
    color: #444;
  }
`;
