import styled from 'styled-components';

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
