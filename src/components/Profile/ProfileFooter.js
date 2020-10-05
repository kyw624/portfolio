import React from 'react';
import styled from 'styled-components';
import BoxFade from '../BoxFade';

const FooterWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1280px) {
    width: 10rem;
    height: 100%;
    right: 0;
    flex-direction: column;
  }
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
  opacity: 0;
  animation: ${BoxFade} 1s ${(props) => props.delay}s forwards;
  transition: transform 0.3s, background 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 1280px) {
    margin: 2rem 0;
  }
`;

const ProfileFooter = ({ color }) => {
  const tagItems = ['성실', '끈기', '긍정', '협력'];
  const renderProfileTags = (arr) => {
    let delay = 1;
    return arr.map((item, index) => {
      delay += 0.25;
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
