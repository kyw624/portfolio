import React from 'react';
import styled from 'styled-components';

const ContentBox = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid ${(props) => props.color};
`;

const StyledContent = styled.div`
  position: absolute;
  font-size: 1.7rem;
  margin-left: 11rem;
`;

function ProfileContents(props) {
  return (
    <ContentBox>
      <StyledTitle color={props.color}>{props.title}</StyledTitle>
      <StyledContent>{props.content}</StyledContent>
    </ContentBox>
  );
}

export default ProfileContents;
