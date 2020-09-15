import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import StatusBar from './components/StatusBar/StatusBar';
import Main from './components/Main';
import Menu from './components/Menu/Menu';

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
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #e8e8e8;
    /* background-image: url() */
  }
`;

function App() {
  const [page, setPage] = useState(0);
  const [color, setColor] = useState('black');
  const [time, setTime] = useState('');

  const showPage = (num) => setPage(num);
  const changeColor = (color) => setColor(color);

  return (
    <>
      <GlobalStyle />
      <StatusBar />
      <Main page={page} color={color} />
      <Menu showPage={showPage} changeColor={changeColor} />
    </>
  );
}

export default App;
