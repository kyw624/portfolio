import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 10rem;
  height: 12rem;
  box-shadow: 0.2rem 0.4rem 1rem 0.2rem rgba(0, 0, 0, 0.3),
    -0.2rem 0.4rem 1rem 0.2rem rgba(0, 0, 0, 0.3);
  border-radius: 2rem;
  overflow: hidden;
  margin: 1rem;

  &:after {
    content: '${(props) => props.ability}';
    color: white;
    font-size: 2.6rem;
    font-weight: bold;
    line-height: 12rem;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    z-index: 5;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.15s ease-in-out;
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
  }

  img {
    width: 10rem;
    height: 10rem;
    background: white;
  }
`;

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  height: 2rem;
  left: 0;
  bottom: 0;
  background: black;
  color: white;
  line-height: 2rem;
`;

const SkillsItem = (props) => {
  const imageData = {
    javascript: require('../../images/logo/javascript.png'),
    typescript: require('../../images/logo/typescript.png'),
    nodejs: require('../../images/logo/nodejs.png'),
    python: require('../../images/logo/python.png'),
    html: require('../../images/logo/html.png'),
    css: require('../../images/logo/css.png'),
    sass: require('../../images/logo/sass.png'),
    reactjs: require('../../images/logo/reactjs.png'),
    redux: require('../../images/logo/redux.png'),
    mongodb: require('../../images/logo/mongodb.png'),
    mysql: require('../../images/logo/mysql.png'),
    windows: require('../../images/logo/windows.png'),
    linux: require('../../images/logo/linux.png'),
    git: require('../../images/logo/git.png'),
    msoffice: require('../../images/logo/msoffice.png'),
  };
  const renderSkills = (arr) => {
    return arr.items.map((item, index) => {
      const imageName = item.replace(/\s*/g, '').toLowerCase(); // 공백제거 및 소문자
      const ability = arr.ability[index];

      return (
        <ItemContainer key={index} ability={ability}>
          <img src={imageData[imageName]} alt={imageName} />
          <TextBox>{item}</TextBox>
        </ItemContainer>
      );
    });
  };

  return <>{renderSkills(props.item, props.index)}</>;
};

export default SkillsItem;
