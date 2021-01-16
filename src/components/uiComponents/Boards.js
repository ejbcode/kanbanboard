import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Board from './Board';

const BoardsStyle = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Boards = () => {
  const { taskItems, taskStatus, filterTaskId, searchTerm } = useSelector(
    (state) => state.tasks
  );
  const taskStatusFiltered =
    filterTaskId > 0
      ? taskStatus.filter((task) => task.id === filterTaskId)
      : taskStatus;

  const taskItemsFiltered = taskItems.filter((task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BoardsStyle>
      {taskStatusFiltered.map((status) => {
        const tasks = taskItemsFiltered.filter(
          (task) => task.status === status.id
        );
        return <Board key={status.id} status={status} tasks={tasks} />;
      })}
    </BoardsStyle>
  );
};

export default Boards;
