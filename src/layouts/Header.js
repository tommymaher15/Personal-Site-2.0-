import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";
import Navbar from '../components/Nav/Menu/Navbar';
import Burger from "../components/Nav/Burger/Burger";


const HeadBar = styled.header`
    width:100%;
    grid-column: 1 / 4;
    grid-area: header;
    block-size: min(10vh);
    background-color:${theme.colors.navy};
    

 

  
`;




export default function Header() {
    return (
   <HeadBar>
<Navbar />
<Burger></Burger>
</HeadBar>
    )
}