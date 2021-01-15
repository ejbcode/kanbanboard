import styled from 'styled-components';
import { Search } from './Search';
import Boards from './uiComponents/Boards';

const MainStyle = styled.main`
  padding-bottom: 10rem;
`;

const Main = () => (
  <MainStyle>
    <Search />
    <Boards />
  </MainStyle>
);

export default Main;
