import { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './uiComponents/SearchInput';

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Header = () => (
  <header>
    <NavStyled>
      <p>📋KanbanBoard</p>
    </NavStyled>
  </header>
);

export default Header;
