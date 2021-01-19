import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaRegEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusFB, setTaskToEdit } from '../../redux/actions/taskActions';
import useTimeAgo from '../../hooks/useTimeAgo';
import EditForm from './EditForm';

const LiStyle = styled.li`
  min-height: 15rem;
  margin: 1rem 0;
  border-top: ${(props) => props.color || 'red'} solid 0.4rem;
  border-radius: 0.4rem;
  background: var(--black);
  position: relative;

  .arrow {
    width: 3rem;
    position: absolute;
    top: 0;
    bottom: 0;
    text-align: center;
    vertical-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s;
  }
  .arrow:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  .arrowR {
    right: 0;
  }

  .task {
    padding: 0.4rem 4rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    :hover span {
      opacity: 1;
    }
  }
  .task-description {
    position: absolute;
    height: calc(100% - 40px);
    width: calc(100% - 80px);
    flex: 1 0 auto;
    span {
      position: absolute;
      right: 0px;
      top: 0px;
      opacity: 0;
      font-size: 1.6rem;
      transition: opacity 0.3s;
    }
    :hover {
      filter: brightness(1.2);
      cursor: pointer;
    }
  }
  .task-footer {
    position: absolute;
    bottom: 1rem;
    right: 2.5rem;
    margin: 0;
    color: lightgray;
  }
`;

const BoardItem = ({ id, task, status, date }) => {
  const { taskToEdit } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleClick = (step) => {
    dispatch(changeStatusFB(id, step));
  };

  const timeago = useTimeAgo(date);
  // const tasktoedit = '1TpCmIjvOUXnZ2fNHN2R';

  const handleSelectTask = () => {
    dispatch(setTaskToEdit(id));
  };

  return (
    <>
      <LiStyle color={status.color}>
        {taskToEdit === id ? (
          <EditForm id={id} task={task} />
        ) : (
          <>
            {status.id < 2 ? null : (
              <div
                className="arrow arrowL"
                onClick={() => handleClick(-1)}
                aria-hidden
              >
                <FaChevronLeft />
              </div>
            )}
            <div className="task" onClick={handleSelectTask} aria-hidden>
              <div className="task-description">
                <p>{task}</p>
                <span>
                  <FaRegEdit />
                </span>
              </div>
              <div className="task-footer">
                <p>{timeago}</p>
              </div>
            </div>
            {status.id > 3 ? null : (
              <div
                className="arrow arrowR"
                onClick={() => handleClick(+1)}
                aria-hidden
              >
                <FaChevronRight />
              </div>
            )}
          </>
        )}
      </LiStyle>
    </>
  );
};

BoardItem.propTypes = {
  date: PropTypes.number,
  id: PropTypes.string,
  status: PropTypes.array,
  task: PropTypes.array,
};

export default BoardItem;
