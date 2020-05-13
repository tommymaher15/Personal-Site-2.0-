import React from 'react';
import styled from '@emotion/styled';
import mixin from '../styles/mixin';
import colors from '../styles/colors';




const FootWrap = styled.footer`
  grid-area: footer;
  block-size: min(10.5vh);
  color:greenyellow;
  background-color:${colors.navy};
  ${mixin.centerStyles};
  
`;


export default function Footer() {
    return (
        <FootWrap>
        <h1>Footer</h1>
        
  


        </FootWrap>
    )
}