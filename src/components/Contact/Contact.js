import React from 'react';
import styled from 'styled-components';
import BoxFade from '../BoxFade';

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactTitle = styled.div`
  font-size: 3.6rem;
  font-weight: 700;
  padding-bottom: 0.6rem;
  margin-bottom: 10rem;
  border-bottom: 1px solid ${(props) => props.color};
  opacity: 0;
  animation: ${BoxFade} 1s forwards;
`;

const ContentBox = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
`;

const ContactWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  opacity: 0;
  animation: ${BoxFade} 1s ${(props) => props.delay}s forwards;
`;

const ContactCaption = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  margin-right: 1rem;
  border-bottom: 1px solid ${(props) => props.color};
`;

const ContactContent = styled.a`
  font-size: 1.8rem;
  width: fit-content;
  cursor: pointer;

  &:active {
    color: ${(props) => props.color};
  }
`;

function Contact({color}) {
  const ContactItems = [
    {
      caption: 'Email.',
      content: 'sesabc1005@naver.com',
    },
    {
      caption: 'Phone.',
      content: '010-2338-6240',
    },
    {
      caption: 'GitHub.',
      content: 'https://github.com/kyw624',
    },
  ];

  const copyToClipboard = (e) => {
    const value = e.currentTarget.textContent;

    navigator.clipboard.writeText(value);
    alert('Copied !!');
  };

  const renderContact = (arr) => {
    let delay = 0;
    return arr.map((item, index) => {
      delay += 0.25;
      return (
        <ContactWrap key={index} delay={delay}>
          <ContactCaption color={color}>{item.caption}</ContactCaption>
          <ContactContent color={color} onClick={copyToClipboard}>
            {item.content}
          </ContactContent>
        </ContactWrap>
      );
    });
  };

  return (
    <ContactContainer>
      <ContactTitle color={color}>Contact with me.</ContactTitle>
      <ContentBox>{renderContact(ContactItems)}</ContentBox>
    </ContactContainer>
  );
}

export default React.memo(Contact);
