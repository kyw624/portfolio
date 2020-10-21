import React from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledDate = styled.div`
  font-size: 1.6rem;
`;

const StyledClock = styled.div`
  margin-left: 0.5rem;
`;

function StatusBarClock({date, time, getTime}) {
  const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];
  setInterval(getTime, 1000);

  return (
    <ClockContainer>
      <StyledDate>({DAY_LIST[date]})</StyledDate>
      <StyledClock>{time}</StyledClock>
    </ClockContainer>
  );
}

export default React.memo(StatusBarClock);
