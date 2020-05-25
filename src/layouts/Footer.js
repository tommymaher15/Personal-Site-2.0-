import React from 'react';
import styled from '@emotion/styled';
import mixin from '../styles/mixin';
import colors from '../styles/colors';




const FootWrap = styled.div`
  
  grid-column: 1 / 4;
  height: 10vh;
  width:100%
 
  
`
const Foot = styled.footer`
grid-area: footer;
color:greenyellow;
  background-color:${colors.navy};
  ${mixin.centerStyles};

`;


export default function Footer() {
    return (
        <FootWrap>
        <Foot><h2>Made by Tommy Maher</h2></Foot>
        
        
  


        </FootWrap>
    )
}