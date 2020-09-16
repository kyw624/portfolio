import React from 'react';
import styled from 'styled-components';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const MainTemplate = styled.div`
  width: 130rem;
  height: 65rem;
  margin: 0 auto;
  border: 0.5rem double ${(props) => props.color};
  background: ${(props) => {
    switch (props.color) {
      case 'mediumseagreen':
        return 'rgba(247, 252, 249, .85)';
      case 'orange':
        return 'rgba(255, 252, 245, .85)';
      case 'deepskyblue':
        return 'rgba(245, 253, 255, .85)';
      case 'tomato':
        return 'rgba(255, 249, 248, .85)';
      default:
        return 'rgba(245, 245, 245, .85)';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 8rem;
`;

function Main(props) {
  const displayPage = (num) => {
    switch (num) {
      case 1:
        return <Profile color={props.color} />;
      case 2:
        return <Skills color={props.color} />;
      case 3:
        return <Projects color={props.color} />;
      case 4:
        return <Contact color={props.color} />;
      default:
        return <Home color={props.color} />;
    }
  };
  return (
    <MainTemplate color={props.color}>{displayPage(props.page)}</MainTemplate>
  );
}

export default React.memo(Main);
