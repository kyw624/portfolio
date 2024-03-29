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
  justify-content: center;
  position: relative;
  margin-top: 8rem;

  @media only screen and (max-width: 1440px) {
    width: 90%;
  }

  @media only screen and (max-width: 1024px) {
    height: 50rem;
  }
`;

function Main({ page, color }) {
  const displayPage = (num) => {
    switch (num) {
      case 1:
        return <Profile color={color} />;
      case 2:
        return <Skills color={color} />;
      case 3:
        return <Projects color={color} />;
      case 4:
        return <Contact color={color} />;
      default:
        return <Home />;
    }
  };
  return <MainTemplate color={color}>{displayPage(page)}</MainTemplate>;
}

export default React.memo(Main);
