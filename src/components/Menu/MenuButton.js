import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 10rem;
  height: 10rem;
  font-size: 2rem;
  background: white;
  border: 0.3rem solid ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
    background: black;
    color: white;
  }

  i {
    margin: 0;
    font-size: 5rem;
  }
`;

function MenuButton(props) {
  return (
    <>
      <StyledButton
        onMouseOver={() => {
          console.log(props);
          props.showPage(props.index);
          props.changeColor(props.color);
        }}
        color={props.color}
      >
        <Icon name={props.icon} />
        {props.text}
      </StyledButton>
    </>
  );
}

export default MenuButton;
