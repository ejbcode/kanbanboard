import { FaAngleDown } from 'react-icons/fa';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredStatusId } from '../../redux/actions/taskActions';

const DropStyle = styled.div`
  display: inline-block;
  position: relative;
  white-space: nowrap;

  div {
    cursor: pointer;
  }

  .dropdown {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    padding: 1rem 0.5rem;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.7);
    border: 1px gray solid;
    position: absolute;
    top: 3.5rem;
    right: 0px;
    cursor: pointer;
    width: 150px;
    z-index: 1;
  }

  .dropdown li {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }
  .dropdown li:hover {
    text-decoration: underline;
  }
`;

const DropDownLabels = ({ taskStatus }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState();

  const handleClick = (status) => {
    setOpen(false);
    setTask(status);
    dispatch(setFilteredStatusId(status.id));
  };
  return (
    <DropStyle open={open}>
      <div onClick={() => setOpen(!open)} aria-hidden>
        {task?.type ?? '🔎 AllTask'} <FaAngleDown />
      </div>
      <ul className="dropdown">
        {taskStatus.map((status) => (
          <li key={status.id} aria-hidden onClick={() => handleClick(status)}>
            {status.type}
          </li>
        ))}
        <li aria-hidden onClick={() => handleClick(0)}>
          🔎 All tasks
        </li>
      </ul>
    </DropStyle>
  );
};

export default DropDownLabels;
