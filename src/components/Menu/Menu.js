import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';

const MenuContainer = styled.div`
  position: fixed;
  padding: 1rem;
  bottom: 2rem;
  left: calc(50% - 35rem);
  width: 70rem;
  height: 15rem;
  background: rgba(211, 211, 211, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2rem 2rem 0 0;

  @media only screen and (max-width: 1024px) {
    left: calc(50% - 30rem);
    width: 60rem;
    height: 10rem;
  }
`;

function Menu({showPage, changeColor}) {
  const menuItems = [
    {
      color: 'black',
      text: 'Home',
      icon: 'home',
    },
    {
      color: 'mediumseagreen',
      text: 'Profile',
      icon: 'user',
    },
    {
      color: 'orange',
      text: 'Skills',
      icon: 'gem',
    },
    {
      color: 'deepskyblue',
      text: 'Project',
      icon: 'folder open',
    },
    {
      color: 'tomato',
      text: 'Contact',
      icon: 'phone',
    },
  ];

  const displayButton = (arr) => {
    return arr.map((item, index) => {
      return (
        <MenuButton
          showPage={showPage}
          changeColor={changeColor}
          key={index}
          index={index}
          color={item.color}
          text={item.text}
          icon={item.icon}
        />
      );
    });
  };

  return <MenuContainer>{displayButton(menuItems)}</MenuContainer>;
}

export default React.memo(Menu);
