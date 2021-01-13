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
  const { taskItems, taskStatus } = useSelector((state) => state.tasks);

  return (
    <BoardsStyle>
      {taskStatus.map((status) => {
        const tasks = taskItems.filter((task) => task.status === status.id);
        return (
          <>
            <Board
              key={status.id}
              status={status}
              tasks={tasks}
              title={status.type}
              color={status.color}
            />
          </>
        );
      })}
    </BoardsStyle>
  );
};

export default Boards;
