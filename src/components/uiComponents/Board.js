import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTaskInFirestore } from '../../redux/actions/taskActions';
import BoardItem from './BoardItem';

const BoardStyle = styled.div`
  width: 100%;
  margin: 1rem;
  .title {
    text-align: center;
    padding: 0.2rem;
    font-size: 2rem;
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
    text-align: right;
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
  return (
    <BoardStyle color={status.color}>
      <p className="title">
        {status.type}
        {tasks.length}
      </p>
      <div className="new-input">
        {addingTask && (
          <FormStyle onSubmit={handleSubmit}>
            <p>Add new task 📝</p>
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <textarea
              name="input-task"
              id="input-task"
              autoFocus
              onChange={handleChange}
            />

            <div className="button-section">
              <button type="submit">Add task</button>
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
