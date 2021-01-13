import { AiOutlineFileAdd } from 'react-icons/ai';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 100%;
  /* max-width: 380px; */
`;

const Button = () => {
  const handleClick = () => {
    console.log('clock');
  };
  return (
    <ButtonStyle type="button" onClick={handleClick}>
      Add Task <AiOutlineFileAdd />
    </ButtonStyle>
  );
};

export default Button;
