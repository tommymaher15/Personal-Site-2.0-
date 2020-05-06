import React from 'react';
import styled from '@emotion/styled';
import {  css } from '@emotion/core';
 // Double dots to go back a directory!!!
  
/*
Figure out how to get css utilities stored in a js file.

*/
const centerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const HeadWrap = styled.div`

grid-column: 1 / 4;
 background-color:red;
  height: 10vh;
  width:100%
 
`;
const Test = styled.header`
  grid-area: header;
  block-size: min(10vh);
  color:blue;
  ${centerStyles};
  

`;

export default function Header() {
    return (
        <HeadWrap>
   <Test><h1> Header</h1></Test>
       
        
        </HeadWrap>
    )
}
