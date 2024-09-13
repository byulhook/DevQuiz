import { css } from '@emotion/react';
import './App.css';
import theme from './styles/theme';

function App() {
  return (
    <div css={appContainer}>
      <div css={appPhoneLayoutStyle}>hello, world</div>
    </div>
  );
}

const appContainer = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const appPhoneLayoutStyle = css`
  width: 600px;
  height: 100vh;
  background-color: ${theme.colors.white};
`;

export default App;
