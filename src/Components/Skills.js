import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import html from '../img/icons/html.svg';
import css from '../img/icons/css.svg';
import figma from '../img/icons/figma.svg';
import javascript from '../img/icons/javascript.svg';
import react from '../img/icons/react.svg';
import android from '../img/icons/android.svg';
import c from '../img/icons/c.svg';
import cp from '../img/icons/c++.svg';
import firebase from '../img/icons/firebase.svg';
import flutter from '../img/icons/flutter.svg';
import git from '../img/icons/git.svg';
import github from '../img/icons/github.svg';
import jupyter from '../img/icons/jupyter.png';
import mysql from '../img/icons/mysql.svg';
import python from '../img/icons/python.svg';

function Skills() {
  return (
    <SkillsStyled>
      <Title title={'My Skills'} span={'my skills'} />
      <SkillInner>
        <SkillSubNody>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={html} alt='html' />
            </SkillImgContainer>
            HTML-5
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={css} alt='css' />
            </SkillImgContainer>
            CSS
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={figma} alt='figma' />
            </SkillImgContainer>
            FIGMA
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={javascript} alt='javascript' />
            </SkillImgContainer>
            JAVASCRIPT
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={react} alt='react' />
            </SkillImgContainer>
            REACT
          </SkillLang>
        </SkillSubNody>
        <SkillSubNody>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={android} alt='android' />
            </SkillImgContainer>
            APP DEV
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={c} alt='c' />
            </SkillImgContainer>
            C++
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={cp} alt='cp' />
            </SkillImgContainer>
            C
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={firebase} alt='firebase' />
            </SkillImgContainer>
            FIREBASE
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={flutter} alt='flutter' />
            </SkillImgContainer>
            FLUTTER
          </SkillLang>
        </SkillSubNody>
        <SkillSubNody>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={git} alt='git' />
            </SkillImgContainer>
            GIT
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={github} alt='github' />
            </SkillImgContainer>
            GIT-HUB
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={jupyter} alt='jupyter' />
            </SkillImgContainer>
            JUPYTER
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={mysql} alt='mysql' />
            </SkillImgContainer>
            MYSQL
          </SkillLang>
          <SkillLang>
            <SkillImgContainer>
              <SkillImg src={python} alt='python' />
            </SkillImgContainer>
            PYTHON
          </SkillLang>
        </SkillSubNody>
      </SkillInner>
    </SkillsStyled>
  );
}

const SkillInner = styled.div`
  margin-bottom: 25px;
`;

const SkillsStyled = styled.section``;

const SkillSubNody = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  justify-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const SkillLang = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const SkillImgContainer = styled.div`
  height: 50px;
  width: 50px;
  margin-top: 30px;
  margin-bottom: 8px;

  @media screen and (max-width: 768px) {
    margin-bottom: 4px;
  }
`;

const SkillImg = styled.img`
  height: 100%;
  width: 100%;
`;

export default Skills;
