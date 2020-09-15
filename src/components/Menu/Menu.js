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
  background: rgba(0, 0, 0, 0.075);
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2rem 2rem 0 0;
`;

function Menu(props) {
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
          showPage={props.showPage}
          changeColor={props.changeColor}
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

export default Menu;
