import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegTimesCircle, FaRegTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  deleteTaskFromFB,
  setTaskToEdit,
  updateTaskFromFB,
} from '../../redux/actions/taskActions';

const FormStyle = styled.form`
  padding: 1rem 3rem;
  background: var(--black);
  border-radius: 0.3rem;
  margin-top: 1rem;

  textarea {
    min-height: 8rem;
    width: 100%;
    resize: none;
    margin-bottom: 0.5rem;
    padding: 1rem;
  }
  .button-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .button-section > * {
    cursor: pointer;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .right span {
    font-size: 2.5rem;
    margin: 0 1.5rem;
    color: lightgray;
    padding-top: 0.5rem;
  }

  button {
    padding: 0.7rem 2rem;
  }
`;

const EditForm = ({ id, task }) => {
  const dispatch = useDispatch();
  const [taskNew, setTaskNew] = useState(task);
  const handleChange = (event) => {
    setTaskNew(event.target.value);
  };

  const handleClick = () => {
    dispatch(deleteTaskFromFB(id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTaskFromFB(id, taskNew));
  };

  const abortEditTask = () => {
    dispatch(setTaskToEdit(0));
  };
  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <p>Edit task 📝</p>
        {/* eslint-disable */}

        <textarea
          name="input-task"
          id="input-task"
          autoFocus
          maxlength="150"
          value={taskNew}
          onChange={handleChange}
          ref={(ref) => ref && ref.focus()}
          onFocus={(e) =>
            e.currentTarget.setSelectionRange(
              e.currentTarget.value.length,
              e.currentTarget.value.length
            )
          }
        />
        {/* eslint-enable */}

        <div className="button-section">
          <span>
            <FaRegTrashAlt onClick={handleClick} />
          </span>
          <div className="right">
            <span>
              <FaRegTimesCircle onClick={abortEditTask} />
            </span>
            <button type="submit">Save</button>
          </div>
        </div>
      </FormStyle>
    </div>
  );
};

EditForm.propTypes = {
  id: PropTypes.string,
  task: PropTypes.object,
};

export default EditForm;
