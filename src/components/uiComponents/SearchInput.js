import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchTerm } from '../../redux/actions/taskActions';

const InputStyle = styled.div`
  border-bottom: gray solid 1px;
  width: 100%;
  margin: 0;

  input {
    padding: 1rem 0;
    color: lightgray;
    border: red solid;
  }
  input[type='text'] {
    width: 95%;
    border: none;
    background: transparent;
  }
  input:active,
  input:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    margin: 0 2rem;
  }
`;

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <InputStyle>
      <input type="text" placeholder="Search" onChange={handleChange} />
      <AiOutlineSearch />
    </InputStyle>
  );
};

export default SearchInput;
