import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from './uiComponents/Button';
import DropDownLabels from './uiComponents/DropDownLabels';
import SearchInput from './uiComponents/SearchInput';

const SearchStyle = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0 1rem;
  }
`;

export const Search = () => {
  const { taskStatus } = useSelector((state) => state.tasks);

  return (
    <SearchStyle>
      <Button />
      <SearchInput />
      <DropDownLabels taskStatus={taskStatus} />
    </SearchStyle>
  );
};
