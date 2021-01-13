import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BoardItem from './BoardItem';

const BoardStyle = styled.div`
  width: 100%;
  margin: 1rem;
  /* border: ${(props) => props.color || 'palevioletred'} 2px solid; */

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
  padding: 2rem 4rem;
  background: var(--black);
  border-radius: 0.3rem;
  border-top: #f03c4c solid 0.4rem;
  textarea {
    min-height: 10rem;
    width: 100%;
    resize: none;
    margin-bottom: 1rem;
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
  const [contentNewTask, setContentNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contentNewTask);
  };

  const handleChange = (event) => {
    setContentNewTask({
      ...contentNewTask,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <BoardStyle color={status.color}>
      <p className="title">{status.type}</p>
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
        {tasks.map(({ key, task }) => (
          <BoardItem key={key} id={key} task={task} status={status} />
        ))}
      </ul>
    </BoardStyle>
  );
};
export default Board;
