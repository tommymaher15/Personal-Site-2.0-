import React from 'react';
import styled from '@emotion/styled';

const SideWrap = styled.div`
display:grid;
grid-area:sidebar;
`;


const Sidebar1 = styled.aside`
background-color:brown;
position: sticky;
height:100vh;
top: 0; 
/*remove sidebar below this size */
@media (max-width: 750px) {
display:none;
}

`;




const StickyTesting = styled.h1`
color:green;


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

