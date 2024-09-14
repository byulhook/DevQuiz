import { css } from '@emotion/react';
import theme from '../styles/theme';

const buttonStyles = (isSelected: boolean) => css`
  width: 100%;
  padding: 12px 16px;
  border-radius: 9999px;
  border: 1.6px solid ${isSelected ? theme.colors.primary : '#D1D5DB'};
  background-color: ${theme.colors.white};
  margin-bottom: 16px;
  text-align: left;
`;

interface SelectedButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SelectedButton = ({ text, isSelected, onClick }: SelectedButtonProps) => {
  return (
    <button css={buttonStyles(isSelected)} onClick={onClick}>
      {text}
    </button>
  );
};
