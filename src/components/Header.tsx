import { css } from '@emotion/react';
import { Bell } from 'lucide-react';

import UserAvatar from '@/components/UserAvatar';
import theme from '@/styles/theme';

function Header() {
  return (
    <header css={header}>
      <ul>
        <li className="btn-alarm">
          <Bell />
        </li>
        <li>
          <UserAvatar />
        </li>
      </ul>
    </header>
  );
}

const header = css`
  width: calc(100% - 240px);
  height: 70px;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 50px;
  box-sizing: border-box;
  background-color: ${theme.colors.white};
  & ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    .btn-alarm {
      padding: 6px 10px 0 10px;
      color: ${theme.colors.gray600};
      cursor: pointer;
      &:hover {
        color: ${theme.colors.primaryHover};
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;

export default Header;
