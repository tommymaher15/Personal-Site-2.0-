import React from 'react';
import styled from '@emotion/styled';
import {  css } from '@emotion/core';

const centerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;


const FootWrap = styled.footer`
  grid-area: footer;
  block-size: min(10.5vh);
  color:greenyellow;
  background-color:purple;


 ${centerStyles};
  
`;


export default function Footer() {
    return (
        <FootWrap>
        <h1>Footer</h1>
        
  


        </FootWrap>
    )
}