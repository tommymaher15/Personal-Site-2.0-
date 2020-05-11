import React from 'react';
import styled from '@emotion/styled';

const SideWrap = styled.div`
display:grid;
grid-area:sidebar;
`;


const Sidebar1 = styled.aside`
background-color:brown;

position: sticky;
  top: 0;
  

  


`;



export default function Sidebar() {
    return (
      <SideWrap>
        <Sidebar1 />
        </SideWrap>
    )
}

