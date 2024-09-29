import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as Dialog from '@radix-ui/react-dialog';

import githubLogo from '@/assets/github.png';
import googleLogo from '@/assets/google.png';
import logo from '@/assets/Logo.png';
import Button from '@/components/Button';
import { useGithubSignIn } from '@/hooks/useGithubSignIn';
import { useGoogleSignIn } from '@/hooks/useGoogleSignIn';

import theme from '@/styles/theme';

const LoginModal = () => {
  const [open, setOpen] = useState(false);
  const { signIn: githubLogin } = useGithubSignIn();
  const { signIn: googleLogin } = useGoogleSignIn();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <StyledButton>Log in</StyledButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay css={overlayStyles} />
        <Dialog.Content css={contentStyles}>
          <div css={bgImgContainer}>
            <img src={logo} alt="DevQuiz Logo" />
          </div>
          <div css={loginSectionContainer}>
            <Dialog.Title css={loginTitleContainer}>
              <h1 css={titleStyle}>Hello, World!</h1>
              <p css={subtitleStyle}>Welcome to DevQuiz</p>
            </Dialog.Title>
            <div css={buttonContainer}>
              <Button
                backgroundColor={theme.colors.black}
                fontColor={theme.colors.white}
                image={githubLogo}
                text="Log in with Github"
                onClick={() => githubLogin()}
                customStyle={css`
                  min-width: 200px;
                `}
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
                customStyle={css`
                  min-width: 200px;
                `}
              />
            </div>
            <Dialog.Description css={descriptionStyle}>
              log in with Github or Google
            </Dialog.Description>
          </div>
          <Dialog.Close asChild>
            <button css={closeButtonStyle}>&times;</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoginModal;

const overlayStyles = css`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const contentStyles = css`
  z-index: 12;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 558px;
  height: 463px;
  background-color: white;
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 558px;
  max-width: 650px;
  max-height: 85vh;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  border-radius: 54px;
  justify-content: center;
  padding: 0 15px;
  font-size: ${theme.fontSizes.base};
  line-height: 1;
  min-width: 80px;
  height: 40px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.gray700};
  }
`;

const bgImgContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  border-radius: 4px;
  background-color: ${theme.colors.gray200};
  img {
    width: 42%;
  }
`;

const loginSectionContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
  height: 100%;
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
  font-size: 30px;
  font-weight: 800;
  color: ${theme.colors.black};
  margin-bottom: 8px;
`;

const subtitleStyle = css`
  font-size: ${theme.fontSizes.medium};
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
  width: 260px;
  margin: 10px 0;
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

const descriptionStyle = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const closeButtonStyle = css`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
