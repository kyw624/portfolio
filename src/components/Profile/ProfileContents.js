import React from 'react';
import styled from 'styled-components';

const ContentBox = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  margin: 1rem 0;

  @media only screen and (max-width: 1024px) {
    margin: 0.2rem 0;
  }
`;

const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid ${(props) => props.color};

  @media only screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;

const StyledContent = styled.div`
  position: absolute;
  font-size: 1.7rem;
  margin-left: 11rem;
  margin-bottom: 0.6rem;

  @media only screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

function ProfileContents({color, title, content}) {
  return (
    <ContentBox>
      <StyledTitle color={color}>{title}</StyledTitle>
      <StyledContent>{content}</StyledContent>
    </ContentBox>
  );
}

export default ProfileContents;
