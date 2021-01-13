import { AiOutlineFileAdd } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTask } from '../../redux/actions/taskActions';

const ButtonStyle = styled.button`
  width: 100%;
  background: var(--red);
  transition: 0.3s;

  :disabled {
    /* background: rgba(255, 255, 255, 0.2); */
    filter: grayscale(50%);
    cursor: initial;
  }
  /* max-width: 380px; */
`;

const Button = () => {
  const { addingTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTask());
  };
  return (
    <ButtonStyle type="button" onClick={handleClick} disabled={addingTask}>
      Add Task <AiOutlineFileAdd />
    </ButtonStyle>
  );
};

export default Button;
