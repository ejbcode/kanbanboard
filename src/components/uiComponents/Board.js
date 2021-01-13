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
  .input {
    /* :nth-child(n + 1) {
      display: none;
    } */
    :last-child {
      border: red solid;
    }
  }
`;

const Board = ({ tasks, status }) => (
  <BoardStyle color={status.color}>
    <p className="title">{status.type}</p>
    <p className="input">new input</p>
    <ul>
      {
        // render the taskform items for the list
        tasks.map(({ key, task }) => (
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
export default Board;
