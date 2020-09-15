import React from 'react';
import styled from 'styled-components';

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledClock = styled.div`
  margin-left: 0.5rem;
`;

function StatusBarClock(props) {
  const DAY = ['일', '월', '화', '수', '목', '금', '토'];
  setInterval(props.getTime, 1000);

  return (
    <ClockContainer>
      <div>({DAY[props.date]})</div>
      <StyledClock>{props.time}</StyledClock>
    </ClockContainer>
  );
}

export default React.memo(StatusBarClock);
