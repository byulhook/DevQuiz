import { css, SerializedStyles } from '@emotion/react';

interface ButtonProps {
  backgroundColor: string;
  fontColor: string;
  image?: string;
  text: string;
  onClick?: () => void;
  customStyle?: SerializedStyles;
  props?: any;
}

const Button = ({
  backgroundColor,
  fontColor,
  image,
  text,
  onClick,
  customStyle,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      css={[buttonStyle(backgroundColor, fontColor), customStyle]}
      onClick={onClick}
      {...props}
    >
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
  min-width: 300px;
  height: 60px;
  background-color: ${backgroundColor};
  color: ${fontColor};
  border-radius: 54px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
`;
