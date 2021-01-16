import { useEffect, useState } from 'react';
import styled from 'styled-components';

const DateStyle = styled.p`
  font-size: 1.2rem;
`;

const TheDate = () => {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <>
      <DateStyle>
        {date.toLocaleString('en-us', { dateStyle: 'long' })}
      </DateStyle>
    </>
  );
};

export default TheDate;
