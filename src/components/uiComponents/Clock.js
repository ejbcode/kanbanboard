import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ClockStyle = styled.h2``;

const Clock = () => {
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

  return <ClockStyle>{date.toLocaleTimeString()}</ClockStyle>;
};

export default Clock;
