import styled from '@emotion/styled';
import { Home, CheckSquare, Edit3, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import PATH from '@/routes/path';
import theme from '@/styles/theme';

import IconWithLabel from './IconWithLabel';

function BottomNav() {
  return (
    <Nav>
      <ul>
        <li>
          <StyledNavLink to="/" end>
            <IconWithLabel icon={<Home size={24} />} label="홈" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={PATH.QUIZ_MULTIPLE_CHOICE}>
            <IconWithLabel icon={<CheckSquare size={24} />} label="객관식 퀴즈" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={PATH.QUIZ_SHORT_ANSWER}>
            <IconWithLabel icon={<Edit3 size={24} />} label="주관식 퀴즈" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={PATH.SETTINGS}>
            <IconWithLabel icon={<Settings size={24} />} label="설정" />
          </StyledNavLink>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  padding: 8px 16px;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);

  & ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    & li {
      flex: 1;
      text-align: center;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #9e9e9e;
  display: block;
  transition: color 0.3s ease;

  &.active {
    color: ${theme.colors.primary};
  }

  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

export default BottomNav;
