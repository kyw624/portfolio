import React from 'react';
import styled from 'styled-components';
// import { Icon } from 'semantic-ui-react';
import SkillsItem from './SkillsItem';
import BoxFade from '../BoxFade';

const SkillsContainer = styled.div`
  margin: 0;
  padding: 1rem 10rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const SkillsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  opacity: 0;
  animation: ${BoxFade} 1s ${(props) => props.delay}s forwards;
  padding: 0.5rem 0;

  @media only screen and (max-width: 1024px) {
    margin: 0.5rem 0;
  }
`;

const SkillsTitle = styled.div`
  font-weight: bold;
  font-size: 2.6rem;
  border-bottom: 0.2rem solid ${(props) => props.color};
  padding-bottom: 0.5rem;
  margin-bottom: 0.7rem;

  @media only screen and (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }
`;

const SkillsContent = styled.div`
  display: flex;
  justify-content: center;
`;

// const ArrowButton = styled.div`
//   margin: 0;
//   height: 100%;
//   position: absolute;
//   left: 0;
//   display: flex;
//   align-items: center;
//   transition: all 1s ease-in-out;
//   animation: none;

//   &:first-child {
//     cursor: pointer;
//     color: ${(props) => props.color};
//     font-size: 5.2rem;
//   }

//   .clicked {
//     animation: opacityArrow 0.5s forwards;

//     @keyframes opacityArrow {
//       50% {
//         opacity: 0;
//       }
//     }
//   }
// `;

function Skills({color}) {
  const skillItems = [
    {
      caption: 'Language',
      items: ['JavaScript', 'TypeScript', 'Node.js', 'Python'],
      ability: ['초급', '입문', '입문', '초급'],
    },
    {
      caption: 'Web Design',
      items: ['HTML', 'CSS', 'Sass'],
      ability: ['초급', '초급', '초급'],
    },
    {
      caption: 'Library',
      items: ['React.js', 'Redux'],
      ability: ['초급', '초급'],
    },
    {
      caption: 'Database',
      items: ['mongoDB', 'MySQL'],
      ability: ['입문', '입문'],
    },
    {
      caption: 'OS',
      items: ['Windows', 'Linux'],
      ability: ['숙련', '초급'],
    },
    {
      caption: 'Etc',
      items: ['Git', 'MS Office'],
      ability: ['초급', '숙련'],
    },
  ];

  const renderSkillItem = (arr) => {
    let delay = -0.2;
    return arr.map((item, index) => {
      delay += 0.25;
      return (
        <SkillsWrap key={index} delay={delay}>
          <SkillsTitle color={color}>{item.caption}</SkillsTitle>
          <SkillsContent>
            <SkillsItem index={index} item={item} />
          </SkillsContent>
        </SkillsWrap>
      );
    });
  };

  // const clickArrow = (e) => {
  //   e.preventDefault();

  //   const target = e.target;

  //   target.classList.remove('clicked');

  //   if (target.classList.contains('right')) {
  //     target.classList.add('left');
  //     target.classList.remove('right');
  //   } else {
  //     target.classList.add('right');
  //     target.classList.remove('left');
  //   }

  //   void target.offsetWidth; // 애니메이션 한 번만 실행되는 현상 방지

  //   target.classList.add('clicked');
  //   // 아이콘 변경시 트랜지션 줄 예정
  // };

  return (
    <SkillsContainer>
      {/* <ArrowButton color={props.color}>
        <Icon name="angle double right" onClick={clickArrow} />
      </ArrowButton> */}
      {renderSkillItem(skillItems)}
    </SkillsContainer>
  );
}

export default React.memo(Skills);
