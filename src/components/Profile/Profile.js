import React from 'react';
import styled from 'styled-components';
import ProfileContents from './ProfileContents';
import ProfileFooter from './ProfileFooter';
import selfImage from '../../images/profile.jpg';

const ProfileContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 10rem);
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem 0 6rem;
`;

const ImageTemplate = styled.div`
  width: 30rem;
  height: 40rem;
  border: 0.2rem dashed ${(props) => props.color};
  border-radius: 50%;
  background: url(${selfImage}) center no-repeat;
  background-size: cover;
`;

const ContentTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  height: 100%;
  padding: 2rem;
`;

const ContentTitle = styled.div`
  padding-bottom: 1rem;

  h2 {
    font-size: 3.6rem;
  }

  div {
    opacity: 0.5;
    font-size: 2.4rem;
  }
`;

const ContentIntroduction = styled.div`
  margin: 1rem 0;
  padding: 1rem 0 1rem 0.5rem;
  font-size: 1.8rem;
  border-top: 0.1rem solid ${(props) => props.color};
  border-bottom: 0.1rem solid ${(props) => props.color};
  display: flex;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      line-height: 3.2rem;
      display: flex;
      align-items: center;

      strong {
        margin: 0.3rem;
        font-weight: 600;
        line-height: 1.8rem;
        padding: 0.3rem;
        border: 0.2rem solid gray;
        border-radius: 0.5rem;
        background: ${(props) => props.color};
        color: white;
      }

      &:nth-child(3),
      &:nth-child(5) {
        margin-left: 0.3rem;
      }
    }
  }
`;

const ContentWrap = styled.div``;

function Profile(props) {
  const profileItem = [
    {
      title: 'Skills',
      content: 'ReactJS / JavaScript / HTML / CSS / Sass / Python / NodeJS',
    },
    {
      title: `Education`,
      content: '경복대학교 IT보안과',
    },
    {
      title: 'Email',
      content: 'sesabc1005@naver.com',
    },
    {
      title: 'Phone',
      content: '010-2338-6240',
    },
    {
      title: 'Motto',
      content: '인생에서 적을 만들지 말자',
    },
  ];

  const renderProfileContents = (arr) => {
    return arr.map((item, index) => {
      return (
        <ProfileContents
          key={index}
          color={props.color}
          title={item.title}
          content={item.content}
        />
      );
    });
  };

  return (
    <>
      <ProfileContainer>
        <ImageTemplate color={props.color} />
        <ContentTemplate>
          <ContentTitle color={props.color}>
            <h2>DaengKIM | 생각하는 개발자</h2>
            <div>Front-end Web Developer</div>
          </ContentTitle>
          <ContentIntroduction color={props.color}>
            <ul>
              <li>
                <strong>좋은 코드와 설계</strong>에 대해 고민하는 주니어 웹
                프론트엔드 개발자 <strong>김영우</strong>입니다.
              </li>
              <li>
                <strong>보기 좋은 인터페이스와 디자인, 애니메이션</strong>에
                관심이 많습니다.
              </li>
              <li>
                반복, 수동적인 작업의 <strong>자동화</strong>에 관심이 많습니다.
              </li>
              <li>
                <strong>신뢰</strong>를 바탕으로 한 구성원들과{' '}
                <strong>소통</strong>하는 것을 좋아합니다.
              </li>
              <li>
                어떤 조직에서든 그냥 구성원이 아닌 <strong>꼭 필요한</strong>{' '}
                구성원이고싶습니다.
              </li>
            </ul>
          </ContentIntroduction>
          <ContentWrap>{renderProfileContents(profileItem)}</ContentWrap>
        </ContentTemplate>
      </ProfileContainer>
      <ProfileFooter color={props.color} />
    </>
  );
}

export default React.memo(Profile);
