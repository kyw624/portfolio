import React from 'react';
import styled from 'styled-components';
import BoxFade from '../BoxFade';

const StyledTag = styled.div`
  border: 0.2rem solid #f2f2f2;
  border-radius: 1rem;
  text-align: center;
  line-height: 5rem;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0 1rem 0 1rem;
  margin-right: 2rem;
  background: #f2f2f2;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem gray;
  color: #007ec7;
  cursor: pointer;
  transition: transform 0.25s, background 0.25s;
  opacity: 0;
  animation: ${BoxFade} 1s ${(props) => props.delay}s forwards;

  &:hover {
    background: white;
    border-color: #007ec7;
    transform: scale(1.2);
  }
`;

function HomeTag({text, delay}) {
  return <StyledTag delay={delay}># {text}</StyledTag>;
}

export default HomeTag;
