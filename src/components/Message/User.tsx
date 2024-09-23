import { css } from '@emotion/react';
import LogoImage from '../../assets/Logo.png';
import UserImage from '../../assets/1.jpeg';

interface UserProps {
    isAI: boolean;
}

const User = ({ isAI }: UserProps) => {
    const imageUrl = isAI ? LogoImage : UserImage;
    const name = isAI ? 'DevQuiz AI' : 'DONGYEONG KIM';

    return (
        <div css={UserContainer}>
            <img css={ImageStyle} src={imageUrl} alt={`${name}'s profile`}/>
            <span css={NameStyle}>{name}</span>
        </div>
    );
};

export default User;

const UserContainer = css`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
`;

const ImageStyle = css`
    width: 30px;
    height: 30px;
    border: 1px solid #E0E2E4;
    border-radius: 50%;
    margin-right: 16px;
`;

const NameStyle = css`
    font-size: 16px;
    font-weight: 600;
    color: #555;
`;