import { css } from '@emotion/react';

interface ButtonProps {
  backgroundColor: string;
  fontColor: string;
  image?: string;
  text: string;
}

const Button = ({ backgroundColor, fontColor, image, text }: ButtonProps) => {
  return (
    <button css={buttonStyle(backgroundColor, fontColor)}>
      {image && <img src={image} css={githubLogoStyle} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;

const githubLogoStyle = css`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const buttonStyle = (backgroundColor: string, fontColor: string) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 60px;
  background-color: ${backgroundColor};
  color: ${fontColor};
  border-radius: 54px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
`;
