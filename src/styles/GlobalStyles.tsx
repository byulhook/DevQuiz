import { css, Global } from '@emotion/react';

import theme from './theme';

const GlobalStyles = () => {
  return <Global styles={baseStyles} />;
};

const baseStyles = css`
  /* reset */
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    line-height: 140%;
    font-size: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }

  body,
  input,
  textarea,
  button {
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-weight: 400;
    letter-spacing: -0.015em;
    color: ${theme.colors.black};
  }

  body {
    background-color: ${theme.colors.gray100};
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fontSizes.base};
    background-color: ${theme.colors.gray100};
  }

  input,
  textarea {
    width: 100%;
    font-size: ${theme.fontSizes.base};
    border: 0;
    outline: none;

    &::placeholder {
      color: ${theme.colors.gray700};
      opacity: 1; /* Firefox */
    }
  }

  textarea {
    resize: none;
  }
`;

export const textEllipsis = (lineClamp: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lineClamp};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  &::before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    background: white;
  }

  @supports (-webkit-line-clamp: ${lineClamp}) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export default GlobalStyles;
