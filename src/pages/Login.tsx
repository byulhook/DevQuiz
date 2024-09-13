import { css } from "@emotion/react";
import Button from "../components/Button";
import githubLogo from "../assets/github.png";
import googleLogo from "../assets/google.png";

const Login = () => {   
    return (
        <div css={pageContainer}>
            <div css={loginTitleContainer}>
                <h1 css={titleStyle}>Hello, World!</h1>
                <p css={subtitleStyle}>Welcome to DevQuiz</p>
            </div>
            <div css={loginContainer}>
                <Button 
                    backgroundColor="#1B1D21" 
                    fontColor="#fff" 
                    image={githubLogo}
                    text="Log in with Github"
                />
                <div css={dividerStyle}>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <Button 
                    backgroundColor="#F3F3F3" 
                    fontColor="#1B1D21" 
                    image={googleLogo}
                    text="Log in with Google"
                />
            </div>
        </div>
    );
}

export default Login;

const pageContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
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
    color: #1B1D21;
    margin-bottom: 8px;
`;

const subtitleStyle = css`
    font-size: 20px;
    font-weight: 500;
    color: #646464;
`;

const loginContainer = css`
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
        border-top: 2px solid #E2E2E2;
        margin: 0 10px;
    }
    span {
        font-weight: 500;
        font-size: 14px;
        color: #A5A5A5;
    }
`;
