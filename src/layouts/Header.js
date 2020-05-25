import React from 'react';
import styled from '@emotion/styled';
import colors from '../styles/colors';
import mixin from '../styles/mixin';




const HeadWrap = styled.div`
grid-column: 1 / 4;
  height: 10vh;
  width:100%
 
`;
const HeadBar = styled.header`
  grid-area: header;
  block-size: min(10vh);
  background-color:${colors.navy};
  color:${colors.vLightSlate};
  ${mixin.centerStyles};
  width:100%
  
`;
 
const NavList = styled.ul`
display:flex;  
  list-style:none;`

const ListItem = styled.li`
padding-left:2em;
font-family: "Calibre"`;



export default function Header() {
    return (
        <HeadWrap>
   <HeadBar>
   <NavList>
   <ListItem>About</ListItem>
   <ListItem>My Work</ListItem>
   <ListItem>Contact</ListItem>
   </NavList>
    </HeadBar>
       
        
        </HeadWrap>
    )
}