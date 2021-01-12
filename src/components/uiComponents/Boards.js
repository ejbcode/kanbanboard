import styled from 'styled-components';
import Board from './Board';

const BoardsStyle = styled.section`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Boards = () => (
  <BoardsStyle>
    <Board title="Request" color="red" />
    <Board title="In Progress" color="blue" />

    <Board title="Done" color="yellow" />
  </BoardsStyle>
);

export default Boards;
