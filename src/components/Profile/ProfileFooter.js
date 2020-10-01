import React from 'react';
import styled, { keyframes } from 'styled-components';

const tagScale = keyframes`
  from {
    transform: none;
  }
  to {
    transform: scale(1.15);
  }
`;

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
  cursor: pointer;
  animation: ${tagScale} 0.9s alternate infinite;
  animation-delay: ${(props) => props.delay}s;
`;

const ProfileFooter = ({ color }) => {
  const tagItems = ['성실', '끈기', '긍정', '협력'];
  const renderProfileTags = (arr) => {
    let delay = -0.85;
    return arr.map((item, index) => {
      delay += 0.15;
      return (
        <ProfileTag key={index} color={color} delay={delay}>
          {item}
        </ProfileTag>
      );
    });
  };
  return <FooterWrap color={color}>{renderProfileTags(tagItems)}</FooterWrap>;
};

export default React.memo(ProfileFooter);
