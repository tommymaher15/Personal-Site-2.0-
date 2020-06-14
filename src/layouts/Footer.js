import React from 'react';
import styled from '@emotion/styled';
import mixin from '../styles/mixin';
import theme from '../styles/theme';





const Foot = styled.footer`
 grid-column: 1 / 4;
 grid-area: footer;
 width:100%;
  block-size: min(10vh);
    background-color:${theme.colors.darkNavy};
    color:${theme.colors.vLightSlate};
    ${mixin.centerStyles};

`;


export default function Footer() {
    return (
       


        <Foot>
        <h2>Made by Tommy Maher</h2>
        </Foot>
        
        
  


    )
}