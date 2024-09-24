import { css } from '@emotion/react';
import { ChevronDown } from 'lucide-react';

import theme from '@/styles/theme';

function UserAvatar() {
  return (
    <div css={userAvatar}>
      <div className="user-thumb">
        <img src="/src/assets/user-default.png" alt="" />
      </div>
      <div className="user-id">
        <p>haruyam15</p>
        <span>
          <ChevronDown size="20" />
        </span>
      </div>
    </div>
  );
}

const userAvatar = css`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  .user-thumb {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    overflow: hidden;
  }
  .user-id {
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      padding-top: 6px;
      color: ${theme.colors.gray600};
    }
  }
`;

export default UserAvatar;
