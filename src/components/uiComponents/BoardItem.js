import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeStatus, changeStatusFB } from '../../redux/actions/taskActions';
import useTimeAgo from '../../hooks/useTimeAgo';

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
  }
  .task-close-button {
    position: absolute;
    top: 0;
    right: 0;
  }
  .task-footer {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    margin: 0;
    color: lightgray;
  }
`;

const BoardItem = ({ id, task, status, date }) => {
  const dispatch = useDispatch();
  const handleClick = (step) => {
    dispatch(changeStatusFB(id, step));
  };

  const timeago = useTimeAgo(date);
  return (
    <>
      <LiStyle color={status.color}>
        {status.id < 2 ? null : (
          <div
            className="arrow arrowL"
            onClick={() => handleClick(-1)}
            aria-hidden
          >
            <FaChevronLeft />
          </div>
        )}
        <div className="task">
          <div className="task-close-button">x</div>
          <p>{task}</p>
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
      </LiStyle>
    </>
  );
};

export default BoardItem;
