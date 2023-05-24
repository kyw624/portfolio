import React, { useState } from 'react';
import styled from 'styled-components';
import BoxFade from '../BoxFade';

const ProjectDescription = styled.div`
  position: relative;
  padding: 2rem;
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 0.3rem solid ${(props) => props.color};
  background: rgba(245, 253, 255, 0.85);
  animation: ${BoxFade} 1s forwards;
`;

const ProjectTitle = styled.div`
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid ${(props) => props.color};

  h2 {
    font-size: 3rem;
  }

  div {
    font-size: 2.4rem;
    opacity: 0.5;
  }

  @media only screen and (max-width: 1024px) {
    padding-bottom: 1rem;

    h2 {
      font-size: 2.4rem;
    }

    div {
      font-size: 1.6rem;
    }
  }
`;

const ProjectContent = styled.div`
  margin-top: 3rem;

  p {
    margin-bottom: 4rem;
    font-size: 2.2rem;
  }

  div {
    margin: 2rem 0;
    font-size: 2rem;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 1rem;

    p {
      margin-bottom: 2rem;
      font-size: 1.6rem;
    }

    div {
      margin: 1rem 0;
      font-size: 1.4rem;
    }
  }
`;

const ProjectLink = styled.a`
  position: absolute;
  bottom: 2rem;
  width: calc(100% - 4rem);
  height: 5rem;
  border: 0.1rem solid ${(props) => props.color};
  border-radius: 1rem;
  background: white;
  align-self: center;
  color: ${(props) => props.color};
  font-size: 3rem;
  text-align: center;
  line-height: 4.8rem; /* border: -0.2rem */
  cursor: pointer;

  &:hover {
    border: 0.1rem solid white;
    background: ${(props) => props.color};
    color: white;
  }

  @media only screen and (max-width: 1024px) {
    height: 4rem;
    font-size: 2.4rem;
    line-height: 3.8rem;
  }
`;

const ProjectImage = styled.img`
  opacity: 0;
  width: 49%;
  height: 100%;
  border: 0.3rem solid ${(props) => props.color};
  animation: ${BoxFade} 1s 0.5s forwards;
`;

function ProjectContents({ color, item }) {
  return (
    <>
      <ProjectDescription color={color}>
        <ProjectTitle color={color}>
          <h2>{item.title}</h2>
          <div>{item.subtitle}</div>
        </ProjectTitle>
        <ProjectContent>
          <p>{item.description}</p>
          <div>개발기간: {item.period}</div>
          <div>사용기술: {item.skill}</div>
          <div>기여도: {item.role}</div>
        </ProjectContent>
        <ProjectLink color={color} href={item.link} target="_blank">
          Link
        </ProjectLink>
      </ProjectDescription>
      <ProjectImage color={color} src={item.thumbnail} />
    </>
  );
}

export default React.memo(ProjectContents);
