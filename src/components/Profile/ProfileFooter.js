import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileTag = styled.div`
  margin: 0 4rem;
  padding: 0;
  border: 0.2rem solid #f2f2f2;
  border-radius: 50%;
  background: #f2f2f2;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem white;
  color: #2a7d4f;
  width: 8rem;
  height: 8rem;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  line-height: 8rem;
`;

const ProfileFooter = ({ color }) => {
  return (
    <FooterWrap color={color}>
      <ProfileTag color={color}>성실</ProfileTag>
      <ProfileTag color={color}>끈기</ProfileTag>
      <ProfileTag color={color}>긍정</ProfileTag>
      <ProfileTag color={color}>협력</ProfileTag>
    </FooterWrap>
  );
};

export default ProfileFooter;
