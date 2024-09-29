import { css } from '@emotion/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Bell, LogOut } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { signOut } from '@/api/firebaseAuth';
import Button from '@/components/Button';
import UserAvatar from '@/components/UserAvatar';
import useUserAuthentication from '@/hooks/useUserAuthentication';
import PATH from '@/routes/path';
import theme from '@/styles/theme';

function Header() {
  const { isUserLogined } = useUserAuthentication();
  const naviagate = useNavigate();

  return (
    <header css={header}>
      <ul>
        <li className="btn-alarm">
          <Bell />
        </li>
        <li>
          {isUserLogined() ? (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <UserAvatar />
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content css={userDropdown}>
                  <DropdownMenu.Item className="menu-item">Setting</DropdownMenu.Item>
                  <DropdownMenu.Separator className="separator" />
                  <DropdownMenu.Item className="menu-item logout">
                    <LogOut size={13} />
                    <button onClick={() => signOut()}>Logout</button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          ) : (
            <Button
              backgroundColor="black"
              fontColor="white"
              text="login"
              onClick={() => {
                naviagate(PATH.LOGIN);
              }}
              customStyle={css`
                min-width: 80px;
                height: 40px;
              `}
            ></Button>
          )}
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

const userDropdown = css`
  width: 150px;
  padding: 5px 5px;
  margin-top: 5px;
  border: 1px solid ${theme.colors.gray300};
  border-radius: 6px;
  background-color: ${theme.colors.white};
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  .menu-item {
    color: ${theme.colors.gray600};
    transition: all 0.15s ease;
    padding: 5px 10px;
  }
  .menu-item:hover,
  menu-item:focus {
    color: ${theme.colors.blackDark};
    outline: none;
    cursor: pointer;
  }

  .menu-item.logout {
    color: ${theme.colors.redWarning};
    display: flex;
    align-items: center;
    gap: 5px;
    button {
      color: ${theme.colors.redWarning};
    }
  }

  .menu-item.logout:hover,
  .menu-item.logout:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.redWarning};
    border-radius: 6px;
    button {
      color: ${theme.colors.white};
    }
  }

  .separator {
    height: 1px;
    background-color: ${theme.colors.gray400};
    margin: 5px 0;
  }
`;

export default Header;
