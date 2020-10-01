import React from 'react';
import styled from 'styled-components';

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
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50rem;
`;

const ContactWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  margin-bottom: 2rem;
`;

const ContactCaption = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  border-bottom: 1px solid ${(props) => props.color};
`;

const ContactContent = styled.a`
  position: absolute;
  font-size: 1.8rem;
  left: 10rem;
  width: fit-content;
  cursor: pointer;

  &:active {
    color: ${(props) => props.color};
  }
`;

function Contact(props) {
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
    return arr.map((item, index) => {
      return (
        <ContactWrap key={index}>
          <ContactCaption color={props.color}>{item.caption}</ContactCaption>
          <ContactContent color={props.color} onClick={copyToClipboard}>
            {item.content}
          </ContactContent>
        </ContactWrap>
      );
    });
  };

  return (
    <ContactContainer>
      <ContactTitle color={props.color}>Contact with me.</ContactTitle>
      <ContentBox>{renderContact(ContactItems)}</ContentBox>
    </ContactContainer>
  );
}

export default React.memo(Contact);
