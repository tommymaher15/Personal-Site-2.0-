import React from 'react';
import styled from '@emotion/styled';

const SideWrap = styled.div`
display:grid;
grid-area:email;

`;



const SideEmail = styled.aside`
background-color:teal;
position: sticky;
height:100vh;



  top: 0;




`;



export default function Email() {
    return (
      <SideWrap>
        <SideEmail />
        </SideWrap>
        
    )
}

