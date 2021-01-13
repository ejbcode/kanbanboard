import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

const InputStyle = styled.div`
  border-bottom: gray solid 1px;
  width: 100%;

  height: 100%;
  /* height: 2rem; */
  input {
    padding: 1rem 0;
  }
  input[type='text'] {
    width: 50%;
    border: none;
    background: transparent;
  }
  input:active,
  input:focus {
    outline: none;
  }
`;

const SearchInput = () => (
  <InputStyle>
    <AiOutlineSearch /> <input type="text" placeholder="Search" />
  </InputStyle>
);

export default SearchInput;
