import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";
import mixin from '../styles/mixin';




const HeadBar = styled.header`
 width:100%;
     grid-column: 1 / 4;
    grid-area: header;
    block-size: min(10vh);
    background-color:${theme.colors.navy};
    color:${theme.colors.vLightSlate};
    
`;
 
const NavList = styled.ul`
  display:flex;  
  list-style:none;
  ${mixin.centerStyles};`
 

const ListItem = styled.li`
padding-left:2em;
font-family: "Calibre"
${mixin.centerStyles};`;




export default function Header() {
    return (
    
   <HeadBar>
   <NavList>
   <ListItem>About</ListItem>
   <ListItem>My Work</ListItem>
   <ListItem>Contact</ListItem>
   </NavList>
    </HeadBar>
       
        
        
    )
}