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
    background: ${(props) => props.color};
    border-color: white;
    color: white;
  }

  i {
    margin: 0;
    font-size: 5rem;
  }

  @media only screen and (max-width: 1024px) {
    width: 7.5rem;
    height: 7.5rem;
    font-size: 1.6rem;

    i {
      font-size: 2.5rem;
    }
  }
`;

function MenuButton(props) {
  return (
    <>
      <StyledButton
        onMouseOver={() => {
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
