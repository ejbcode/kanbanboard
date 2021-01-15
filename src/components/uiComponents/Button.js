import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTask } from '../../redux/actions/taskActions';

const ButtonStyle = styled.button`
  width: 50%;
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
    dispatch(addTask(true));
  };
  return (
    <ButtonStyle type="button" onClick={handleClick} disabled={addingTask}>
      Add Task ➕
    </ButtonStyle>
  );
};

export default Button;
