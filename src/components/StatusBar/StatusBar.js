import React from 'react';
import styled from 'styled-components';

const StatusBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#e5edfa, silver);
  font-size: 1.8rem;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.5);
  transition: background 0.3s, color 0.3s, box-shadow 0.3s, font-size 0.3s;
  animation: headerShadow 1s infinite alternate;

  &:hover {
    background: linear-gradient(black, silver);
    color: white;
    box-shadow: 0 1px 10px 1px black;
  }

  @keyframes headerShadow {
    0% {
    }
    100% {
      box-shadow: 0 4px 10px 4px rgba(0, 126, 199, 0.5);
    }
  }
`;

function StatusBar() {
  return <StatusBarContainer>상태바</StatusBarContainer>;
}

export default StatusBar;
