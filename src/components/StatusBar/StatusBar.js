import React from 'react';
import styled from 'styled-components';
import StatusBarClock from './StatusBarClock';
import logoImage from '../../images/status-bar.jpg';

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
  font-weight: 700;
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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    margin: 0;
    padding: 0;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
    border: 0.1rem solid black;
    border-radius: 0.5rem;
    cursor: pointer;
    background: url(${logoImage}) center no-repeat;
    background-size: cover;
    transition: transform 5s;
    animation: scaleLogo 0.7s both infinite alternate;

    &:hover {
      animation: rotateLogo 1s both infinite;
    }

    @keyframes scaleLogo {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.5);
      }
    }

    @keyframes rotateLogo {
      0% {
        transform: none;
      }
      100% {
        transform: rotate(1turn);
      }
    }
  }
`;

const CopyrightContainer = styled.div`
  font-size: 1.4rem;
`;

function StatusBar({date, time, getTime}) {
  return (
    <>
      <StatusBarContainer>
        <LogoContainer>
          <span role="img" aria-label="logo"></span>
          <div>DaengKIM</div>
        </LogoContainer>
        <CopyrightContainer>
          Copyright 2020. Youngwoo Kim. All rights reserved.
        </CopyrightContainer>
        <StatusBarClock
          date={date}
          time={time}
          getTime={getTime}
        />
      </StatusBarContainer>
    </>
  );
}

export default React.memo(StatusBar);
