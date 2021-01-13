import styled from 'styled-components';
import SearchInput from './uiComponents/SearchInput';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  border: red solid 1px;
`;

const NavStyled = styled.nav`
  width: 100%;
`;

const Header = () => (
  <HeaderStyle>
    <NavStyled>📋KanbanBoard</NavStyled>
    <SearchInput />
  </HeaderStyle>
);

export default Header;
