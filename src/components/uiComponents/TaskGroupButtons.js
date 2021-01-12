import styled from 'styled-components';

const TaskGroupButtonStyle = styled.div`
  width: 100%;
  flex: 1 0 0;
  display: flex;
  justify-content: center;
`;

const ButtonStyle = styled.button`
  margin: 0 1rem;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.02rem;
  cursor: pointer;
  background: var(--black);

  border: 1px solid currentColor;
  font-size: 1.6rem;
  color: white;
  position: relative;
  transition: color 0.3s;

  :hover {
    color: var(--yellow);
  }
`;

const TaskGroupButtons = () => (
  <TaskGroupButtonStyle>
    <ButtonStyle type="button">
      <span>All</span>
    </ButtonStyle>
    <ButtonStyle type="button">
      <span>Col1</span>
    </ButtonStyle>
    <ButtonStyle type="button">
      <span>Col2</span>
    </ButtonStyle>
    <ButtonStyle type="button">
      <span>Col3</span>
    </ButtonStyle>
  </TaskGroupButtonStyle>
);

export default TaskGroupButtons;
