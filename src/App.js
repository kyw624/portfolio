import React, { useState, useCallback } from 'react';
import { createGlobalStyle } from 'styled-components';
import StatusBar from './components/StatusBar/StatusBar';
import Main from './components/Main';
import Menu from './components/Menu/Menu';
import bgImage from './images/background.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }

  html {
    overflow: hidden;
    font-size: 62.5%;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    font-family: 'Open Sans', sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: url(${bgImage}) no-repeat;
    background-size: cover;
  }
`;

function App() {
  const [page, setPage] = useState(0);
  const [color, setColor] = useState('black');
  const [date, setDate] = useState(new Date().getDay());
  const [time, setTime] = useState('');

  const showPage = useCallback((num) => setPage(num), []);
  const changeColor = useCallback((color) => setColor(color), []);
  const getTime = useCallback((time, date) => {
    const today = new Date();
    const toggle = today.getHours() > 12 ? '오후' : '오전';
    const hour =
      today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    const currentTime = `${toggle} ${hour < 10 ? `0${hour}` : hour}:${
      minute < 10 ? `0${minute}` : minute
    }:${second < 10 ? `0${second}` : second}`;

    setTime(currentTime);

    if (`${hour}:${minute}:${second}` === '0:0:0') {
      const updateDate = new Date().getDay();
      if (date !== updateDate) setDate(updateDate);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <StatusBar date={date} time={time} getTime={getTime} />
      <Main page={page} color={color} />
      <Menu showPage={showPage} changeColor={changeColor} />
    </>
  );
}

export default App;
