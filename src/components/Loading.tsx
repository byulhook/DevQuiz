import { css, keyframes } from '@emotion/react';

const Loading = () => {
  return (
    <div css={loaderStyles} className="loading">
      <div css={[dotStyles, createDotAnimation(0)]}></div>
      <div css={[dotStyles, createDotAnimation(0.2)]}></div>
      <div css={[dotStyles, createDotAnimation(0.4)]}></div>
    </div>
  );
};

export default Loading;

const leap = keyframes`
  0% { transform: translateY(0); }
  7% { transform: scale(1); }
  25% { transform: scale(1.3); }
  50% { transform: scale(1); opacity: 0.5; }
  75% { transform: translateY(6px); } 
  100% { transform: translateY(0); }
`;

const loaderStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 52px;
  height: 100%;
  margin: 0 auto;
`;

const dotStyles = css`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: #ff654e;
`;

const createDotAnimation = (delay: number) => css`
  animation: ${leap} 1s ease-in-out alternate ${delay}s infinite;
`;
