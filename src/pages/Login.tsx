import { css } from '@emotion/react';

import githubLogo from '@/assets/github.png';
import googleLogo from '@/assets/google.png';
import logo from '@/assets/logo.png';
import Button from '@/components/Button';
import { useGithubSignIn } from '@/hooks/useGithubSignIn';
import { useGoogleSignIn } from '@/hooks/useGoogleSignIn';
import theme from '@/styles/theme';

const Login = () => {
  const { signIn: githubLogin } = useGithubSignIn();
  const { signIn: googleLogin } = useGoogleSignIn();
  return (
    <div css={loginPageContainer}>
      <div css={bgImgContainer}>
        <img src={logo} alt="DevQuiz Logo" />
      </div>
      <div css={loginSectionContainer}>
        <div css={loginTitleContainer}>
          <h1 css={titleStyle}>Hello, World!</h1>
          <p css={subtitleStyle}>Welcome to DevQuiz</p>
        </div>
        <div css={buttonContainer}>
          <Button
            backgroundColor={theme.colors.black}
            fontColor={theme.colors.white}
            image={githubLogo}
            text="Log in with Github"
            onClick={() => githubLogin()}
          />
          <div css={dividerStyle}>
            <hr />
            <span>or</span>
            <hr />
          </div>
          <Button
            backgroundColor={theme.colors.gray200}
            fontColor={theme.colors.black}
            image={googleLogo}
            text="Log in with Google"
            onClick={() => googleLogin()}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

const loginPageContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const bgImgContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100vh;
  background-color: ${theme.colors.gray200};
  img {
    width: 42%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const loginSectionContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
  height: 100vh;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const loginTitleContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const titleStyle = css`
  font-size: 42px;
  font-weight: 800;
  color: ${theme.colors.black};
  margin-bottom: 8px;
`;

const subtitleStyle = css`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.gray500};
`;

const buttonContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 100px;
`;

const dividerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 380px;
  margin: 24px 0;
  hr {
    flex-grow: 1;
    border: none;
    border-top: 2px solid ${theme.colors.gray300};
    margin: 0 10px;
  }
  span {
    font-weight: 500;
    font-size: 14px;
    color: ${theme.colors.gray300};
  }
`;
