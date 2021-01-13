import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BoardItem from './BoardItem';

const BoardStyle = styled.div`
  width: 100%;
  margin: 1rem;
  /* border: ${(props) => props.color || 'palevioletred'} 2px solid; */
  :first-child li > .arrowL {
    background: red;
  }

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
`;

const LiStyle = styled.li`
  display: flex;
  align-items: center;
  min-height: 10rem;
  margin: 1rem 0;
`;

const Board = ({ tasks, status }) => {
  console.log({ tasks, status });

  return (
    <BoardStyle color={status.color}>
      <p className="title">{status.type}</p>
      <ul>
        {
          // render the taskform items for the list
          tasks.map(({ key, task, stat }) => (
            <BoardItem key={key} id={key} task={task} status={status} />
          ))
        }
      </ul>
    </BoardStyle>
  );

  // return (
  //   <BoardStyle color={color}>
  //     <div className="title">{title}</div>
  //     <ul>
  //       <LiStyle color={color}>
  //         <FaChevronLeft />
  //         <p className="content">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
  //           inventore.
  //         </p>
  //         <FaChevronRight />
  //       </LiStyle>{' '}
  //       <LiStyle color={color}>
  //         <FaChevronLeft />
  //         <p className="content">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
  //           inventore.
  //         </p>
  //         <FaChevronRight />
  //       </LiStyle>{' '}
  //       <LiStyle color={color}>
  //         <FaChevronLeft />
  //         <p className="content">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
  //           inventore.
  //         </p>
  //         <FaChevronRight />
  //       </LiStyle>
  //     </ul>
  //   </BoardStyle>
  // );
};

export default Board;
