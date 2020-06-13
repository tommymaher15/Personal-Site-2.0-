import React from 'react';
import styled from '@emotion/styled';
import mixin from '../styles/mixin';
import theme from '../styles/theme';



const FootWrap = styled.div`
  grid-column: 1 / 4;
     
`
const Foot = styled.footer`
 grid-area:footer;
block-size: min(10vh);
    background-color:${theme.colors.navy};
    color:${theme.colors.vLightSlate};
    ${mixin.centerStyles};

`;


export default function Footer() {
    return (
        <FootWrap>


        <Foot>
        <h2>Made by Tommy Maher</h2>
        </Foot>
        
        
  


        </FootWrap>
    )
}