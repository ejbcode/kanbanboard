import styled from 'styled-components';

const BoardStyle = styled.div`
  width: 100%;
  margin: 1rem;
  background: var(--black);
  border: ${(props) => props.color || 'palevioletred'} 2px solid;
  :first-child li > .arrowL {
    background: red;
  }

  :nth-child(2) .arrowL {
    background: red;
  }

  :last-child {
    background: green;
  }
  .title {
    text-align: center;
    padding: 1rem;
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

const Board = ({ title = 'Title', color = 'green' }) => {
  console.log('22');
  return (
    <BoardStyle color={color}>
      <div className="title">{title}</div>
      <ul>
        <LiStyle color={color}>
          <p className="arrowL">&#60;</p>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            inventore.
          </p>
          <p className="arrowR">&#62; </p>
        </LiStyle>
        <LiStyle color={color}>
          <p className="arrows">&#60;</p>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            inventore.
          </p>
          <p className="arrows">&#62; </p>
        </LiStyle>
        <LiStyle color={color}>
          <p className="arrows">&#60;</p>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            inventore.
          </p>
          <p className="arrows">&#62; </p>
        </LiStyle>
      </ul>
    </BoardStyle>
  );
};

export default Board;
