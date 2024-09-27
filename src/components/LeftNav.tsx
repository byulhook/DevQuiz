import styled from '@emotion/styled';
import { Home, Edit3 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import PATH from '@/routes/path';
import theme from '@/styles/theme';

import IconWithLabel from './IconWithLabel';

function LeftNav() {
  return (
    <Nav>
      <h1>
        <img src="/src/assets/nav-logo-b.png" alt="DevQuiz" />
      </h1>
      <ul>
        <li>
          <NavLink to={PATH.HOME} end>
            <IconWithLabel icon={<Home size={18} />} label="홈" />
          </NavLink>
        </li>
        <li>
          <NavLink to={PATH.QUIZ_SHORT_ANSWER}>
            <IconWithLabel icon={<Edit3 size={18} />} label="모의 면접" />
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  width: 200px;
  height: 100vh;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  background-color: ${theme.colors.white};
  & h1 {
    width: 45%;
    height: 70px;
    display: flex;
    align-items: center;
    margin: 0 20px;
  }
  & ul {
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    gap: 3px;

    & li {
      & a {
        display: block;
        color: #9e9e9e;
        transition: color 0.15s ease;
        border-radius: 8px;
        &.active,
        &.active:hover {
          color: ${theme.colors.primary};
          background: ${theme.colors.gray300};
        }

        &:hover {
          color: ${theme.colors.gray700};
          background: ${theme.colors.gray200};
        }
      }
    }
  }
`;

export default LeftNav;
