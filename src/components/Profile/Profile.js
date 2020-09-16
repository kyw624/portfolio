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
  padding: 3rem;
`;

const ContentTitle = styled.div`
  padding-bottom: 1rem;

  h2 {
    font-size: 3.8rem;
  }

  div {
    opacity: 0.5;
    font-size: 2rem;
  }
`;

const ContentIntroduction = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
  font-size: 1.8rem;
  font-weight: 500;
  height: 15rem;
  border-top: 0.1rem solid ${(props) => props.color};
  border-bottom: 0.1rem solid ${(props) => props.color};
`;

const ContentWrap = styled.div``;

function Profile(props) {
  const profileItem = [
    {
      title: 'Skills',
      content:
        'ReactJS / JavaScript / TypeScript / NodeJS / HTML / CSS / Python',
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
      content: '좌우명 또는 한마디',
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
            <h2>About Me!</h2>
            <div>Front-end Web Developer</div>
          </ContentTitle>
          <ContentIntroduction color={props.color}>소개말</ContentIntroduction>
          <ContentWrap>{renderProfileContents(profileItem)}</ContentWrap>
        </ContentTemplate>
      </ProfileContainer>
      <ProfileFooter color={props.color} />
    </>
  );
}

export default Profile;
