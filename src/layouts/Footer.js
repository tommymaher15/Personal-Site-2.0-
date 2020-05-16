import React from 'react';
import styled from '@emotion/styled';
import mixin from '../styles/mixin';
import colors from '../styles/colors';




const FootWrap = styled.footer`
  grid-area: footer;
  block-size: 100%;
  color:greenyellow;
  background-color:${colors.navy};
  ${mixin.centerStyles};
  
`


export default function Footer() {
    return (
        <FootWrap>
        <h2>Made by Tommy Maher</h2>
        
  


        </FootWrap>
    )
}