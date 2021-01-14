import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from './uiComponents/Button';
import DropDownLabels from './uiComponents/DropDownLabels';
import SearchInput from './uiComponents/SearchInput';
import TaskGroupButtons from './uiComponents/TaskGroupButtons';

const SearchStyle = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Search = () => {
  const { taskStatus } = useSelector((state) => state.tasks);

  return (
    <SearchStyle>
      <SearchInput />
      <Button />
      <DropDownLabels taskStatus={taskStatus} />
    </SearchStyle>
  );
};
