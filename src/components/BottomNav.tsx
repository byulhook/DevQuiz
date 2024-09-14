import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import IconWithText from './IconWithLabel';
import { BookMarked, CircleUserRound, House, Trophy } from 'lucide-react';

function BottomNav() {
  return (
    <Nav>
      <ul>
        <li>
          <StyledNavLink to="/" end>
            <IconWithText icon={<House size={36} />} label="Home" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/ranking">
            <IconWithText icon={<Trophy size={36} />} label="Ranking" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dictionary">
            <IconWithText icon={<BookMarked size={36} />} label="Dictionary" />
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/user">
            <IconWithText icon={<CircleUserRound size={36} />} label="User" />
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
  background-color: white;
  padding: 10px 20px;
  border-top: 1px solid #d9d9d9;
  color: black;

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
  color: #c0c0c0;
  display: block;

  &.active {
    color: #1b1d21;
  }
`;

export default BottomNav;
