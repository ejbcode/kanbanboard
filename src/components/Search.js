import styled from 'styled-components';
import SearchInput from './uiComponents/SearchInput';
import TaskGroupButtons from './uiComponents/TaskGroupButtons';

const SearchStyle = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Search = () => (
  <SearchStyle>
    <SearchInput />
    <TaskGroupButtons />
  </SearchStyle>
);
