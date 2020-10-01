import React from 'react';
import styled from 'styled-components';
import HomeTag from './HomeTag';
import BoxFade from '../BoxFade';

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeTitle = styled.div`
  font-size: 8.2rem;
  margin-top: 20rem;
  animation: ${BoxFade} 1s forwards;
`;

const HomeContent = styled.div`
  font-size: 4.4rem;
  margin-top: 10rem;
  color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: ${BoxFade} 1s 0.5s forwards;
`;

const TagContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  margin: 0 1rem 3rem 0;
`;

function Home() {
  const tagItems = ['HTML', 'CSS', 'JavaScript', 'React JS'];

  const renderTags = (arr) => {
    let delay = 0.75;
    return tagItems.map((item, index) => {
      delay += 0.25;
      return <HomeTag key={index} text={item} delay={delay} />;
    });
  };

  return (
    <HomeContainer>
      <HomeTitle>Front-end Web Developer</HomeTitle>
      <HomeContent>김영우의 포트폴리오 웹 페이지입니다.</HomeContent>
      <TagContainer>{renderTags(tagItems)}</TagContainer>
    </HomeContainer>
  );
}

export default React.memo(Home);
