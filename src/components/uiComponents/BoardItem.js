import styled from 'styled-components';

const LiStyle = styled.li`
  min-height: 15rem;
  margin: 1rem 0;
  border-top: ${(props) => props.color || 'red'} solid 0.4rem;
  border-radius: 0.4rem;
  background: var(--black);
`;

const BoardItem = ({ id, task, status }) => {
  console.log({ id, task, status }, status.color);
  return (
    <>
      <LiStyle color={status.color}>
        {task}
        {status.color}
      </LiStyle>
    </>
  );
};

export default BoardItem;
