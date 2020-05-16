import React from 'react';
import styled from '@emotion/styled';

const SideWrap = styled.div`
display:grid;
grid-area:sidebar;

`;


const Sidebar1 = styled.aside`
background-color:brown;

height:100vh;
position: -webkit-sticky;
  position: sticky;
  top: 0;
  

  


`;



export default function Sidebar() {
    return (
      <SideWrap>
        <Sidebar1> 
        <h1>
          T
        </h1>
        <h1>
          T
        </h1>
        
        <h1>
          T
        </h1>
        
        <h1>
          T
        </h1>
        
        
        
        
        </Sidebar1>
        </SideWrap>
    )
}

