/* eslint-disable react/function-component-definition */
import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle }) => (
  <TitleWrapper>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </TitleWrapper>
);

export default Title;
