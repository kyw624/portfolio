import React, { useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import ProjectContents from './ProjectContents';
import BoxFade from '../BoxFade';

const boxScale = keyframes`
  from {
    transform: none;
  }
  to {
    transform: scale(1.1);
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
`;

const ProjectWrap = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PageContainer = styled.div`
  border: 0.2rem solid ${(props) => props.color};
  border-radius: 3rem;
  width: 15%;
  height: 10%;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  animation: ${boxScale} 1s alternate infinite, ${BoxFade} 1s 1s forwards;
`;

const PageButton = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background: ${(props) => props.color};
  border-radius: 50%;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`;

function Projects(props) {
  const [item, setItem] = useState(0);

  const changeProject = useCallback((num) => setItem(num), []);

  const displayProject = useCallback((color, project, array) => {
    return <ProjectContents color={color} items={array[project]} />;
  }, []);

  const renderPageButton = (arr) => {
    return arr.map((item, index) => {
      return (
        <PageButton
          key={index}
          color={props.color}
          onClick={() => {
            changeProject(index);
          }}
        />
      );
    });
  };

  const projectItems = [
    {
      title: 'My Mate',
      subtitle: '일정관리 웹 앱 (Vanilla JS)',
      description:
        'Web localStorage를 이용한 리스트 및 아이템 추가/제거, 중요 일정 추가/제거 기능이 있는 일정관리 페이지입니다.',
      period: '2020-08-16 ~ 2020-09-01',
      skill: 'HTML, CSS, JavaScript',
      role: '100%',
      thumbnail: require('../../images/thumbnail/my-mate.gif'),
      link: 'https://kyw624.github.io/my-mate/',
    },
    {
      title: 'Portfolio',
      subtitle: '포트폴리오 웹 페이지 (React)',
      description:
        '리액트를 사용해 Mac OS UI를 컨셉으로 제작한 개인 포트폴리오 웹 페이지입니다.',
      period: '2020-09-14 ~',
      skill: 'React',
      role: '100%',
      thumbnail: '',
      link: '',
    },
  ];

  return (
    <ProjectContainer>
      <ProjectWrap color={props.color}>
        {displayProject(props.color, item, projectItems)}
      </ProjectWrap>
      <PageContainer color={props.color}>
        {renderPageButton(projectItems)}
      </PageContainer>
    </ProjectContainer>
  );
}

export default React.memo(Projects);
