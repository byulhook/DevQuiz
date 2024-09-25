import styled from '@emotion/styled';
import { Home, CheckSquare, Edit3, Settings } from 'lucide-react';
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
            <IconWithLabel icon={<Home size={24} />} label="홈" />
          </NavLink>
        </li>
        <li>
          <NavLink to={PATH.QUIZ_MULTIPLE_CHOICE}>
            <IconWithLabel icon={<CheckSquare size={24} />} label="객관식 퀴즈" />
          </NavLink>
        </li>
        <li>
          <NavLink to={PATH.QUIZ_SHORT_ANSWER}>
            <IconWithLabel icon={<Edit3 size={24} />} label="주관식 퀴즈" />
          </NavLink>
        </li>
        <li>
          <NavLink to={PATH.SETTINGS}>
            <IconWithLabel icon={<Settings size={24} />} label="설정" />
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  width: 240px;
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

    & li {
      & a {
        display: block;
        color: #9e9e9e;
        transition: color 0.3s ease;

        &.active {
          color: ${theme.colors.primary};
          background: ${theme.colors.gray300};
        }

        &:hover {
          color: ${theme.colors.primaryHover};
          transition: color 0.2s ease-in-out;
          background: ${theme.colors.gray300};
        }
      }
    }
  }
`;

export default LeftNav;
