import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";










export default function Header() {
    return (
   <HeadBar>
 <h1>Testing Chakra </h1>
    </HeadBar>
)};




const HeadBar = styled.header`
    width:100%;
    grid-column: 1 / 4;
    grid-area: header;
    block-size: min(12vh);
    background-color:${theme.colors.navy};
  
`;



/*



const headersData = [
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Work",
    href: "#work"
  },
  {
    label: "Contact",
    href: "#contact"
  }]; 

  */