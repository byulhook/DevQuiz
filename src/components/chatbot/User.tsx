import { css } from '@emotion/react';

import LogoImage from '../../assets/logo.png';

const User = () => {
  const imageUrl = LogoImage;
  const name = 'DevQuiz AI';

  return (
    <div css={UserContainer}>
      <img css={ImageStyle} src={imageUrl} alt={`${name}'s profile`} />
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
  width: 34px;
  height: 34px;
  border: 1px solid #e0e2e4;
  border-radius: 50%;
  margin-right: 16px;
`;
