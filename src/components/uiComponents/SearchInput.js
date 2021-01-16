import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchTerm } from '../../redux/actions/taskActions';

const InputStyle = styled.div`
  border-bottom: gray solid 1px;
  width: 100%;
  margin: 0 2rem;

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

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <InputStyle>
      <AiOutlineSearch />
      <input type="text" placeholder="Search" onChange={handleChange} />
    </InputStyle>
  );
};

export default SearchInput;
