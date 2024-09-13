import { css } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';
import theme from './styles/theme';
import Login from './pages/Login';

function App() {
  return (
    <div css={appContainer}>
      <div css={appPhoneLayoutStyle}>
      <RouterProvider router={router} />
      </div>
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
