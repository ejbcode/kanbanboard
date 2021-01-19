import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaRegTimesCircle } from 'react-icons/fa';
import { addTask, addTaskInFirestore } from '../../redux/actions/taskActions';
import BoardItem from './BoardItem';

const BoardStyle = styled.div`
  width: 100%;
  margin: 1rem 0;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.2rem;
    font-size: 1.5rem;
    span {
      background: white;
      color: black;
      padding: 0 0.6rem;
      border-radius: 3px;
      font-size: 1.3rem;
    }
  }
  .form-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .arrowL {
  }

  .arrowR {
  }
  .content {
    width: 100%;
    padding: 0 2rem;
  }

  :not(:first-child) .new-input {
    display: none;
  }

  .new-input {
  }
  @media screen and (min-width: 768px) {
    margin: 1rem;
  }
`;

const FormStyle = styled.form`
  padding: 1rem 3rem;
  background: var(--black);
  border-radius: 0.3rem;
  border-top: #f03c4c solid 0.4rem;
  margin-top: 1rem;
  animation: slideDown 0.5s ease 1 forwards;
  opacity: 0;
  position: relative;
  bottom: 10rem;
  @keyframes slideDown {
    to {
      bottom: 0;
      opacity: 1;
    }
  }
  textarea {
    min-height: 8rem;
    width: 100%;
    resize: none;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }
  .button-section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      font-size: 2.5rem;
      margin: 0 1.5rem;
      padding-top: 0.5rem;
      color: lightgray;
    }
  }
  button {
    padding: 0.7rem 2rem;
  }
`;

const Board = ({ tasks, status }) => {
  const { addingTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [contentNewTask, setContentNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contentNewTask !== '') {
      dispatch(addTaskInFirestore(contentNewTask));
    }
  };

  const handleChange = (event) => {
    setContentNewTask(event.target.value);
  };

  const handleAbortNewTask = () => {
    dispatch(addTask(false));
  };
  return (
    <BoardStyle color={status.color}>
      <div className="title">
        <p>{status.type}</p>
        <span>{tasks.length}</span>
      </div>
      <div className="new-input">
        {addingTask && (
          <FormStyle onSubmit={handleSubmit}>
            <div className="form-header">
              <p>Add new task 📝</p>
            </div>
            {/* eslint-disable */}
            <textarea
              name="input-task"
              id="input-task"
              autoFocus
              onChange={handleChange}
            />
            {/* eslint-enable */}

            <div className="button-section">
              <span>
                <FaRegTimesCircle onClick={handleAbortNewTask} />
              </span>
              <button type="submit">Save</button>
            </div>
          </FormStyle>
        )}
      </div>
      <ul>
        {tasks.map(({ key, task, date }) => (
          <BoardItem
            key={key}
            id={key}
            task={task}
            status={status}
            date={date}
          />
        ))}
      </ul>
    </BoardStyle>
  );
};
export default Board;
