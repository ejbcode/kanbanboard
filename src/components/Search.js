import styled from 'styled-components';
import Button from './uiComponents/Button';
import TaskGroupButtons from './uiComponents/TaskGroupButtons';

const SearchStyle = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Search = () => (
  <SearchStyle>
    <Button />
    <TaskGroupButtons />
  </SearchStyle>
);
