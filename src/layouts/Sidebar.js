import React from 'react';
import styled from '@emotion/styled';

const SideWrap = styled.div`

grid-area:sidebar;


`;


const Sidebar1 = styled.aside`

 position: -webkit-sticky;
  position: sticky;
  top: 0;
height:100vh;

background-color:brown;


@media (max-width: 768px) {
  display:none;
}


`;




const StickyTesting = styled.h1`
color:green;
position:sticky;


`;


export default function Sidebar() {
    return (
      <SideWrap>
        <Sidebar1> 
        
        
        <StickyTesting>Hello</StickyTesting>
        
        
        </Sidebar1>
        </SideWrap>
    )
}

