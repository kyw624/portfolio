import React from 'react';
import styled from 'styled-components';
import HomeTag from './HomeTag';

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
`;

const HomeContent = styled.div`
  font-size: 4.4rem;
  opacity: 0.5;
  margin-top: 10rem;
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
    return tagItems.map((item, index) => {
      return <HomeTag text={item} key={index} />;
    });
  };

  return (
    <HomeContainer>
      <HomeTitle>Front-end Developer</HomeTitle>
      <HomeContent>김영우의 포트폴리오 웹 페이지입니다.</HomeContent>
      <TagContainer>{renderTags(tagItems)}</TagContainer>
    </HomeContainer>
  );
}

export default Home;
