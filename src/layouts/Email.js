import React from 'react';
import styled from '@emotion/styled';

/* Grid styles */
const SideWrap = styled.div`
grid-area:email;
top:-100px;

`;


/* Sidebar Stylings */
const SideEmail = styled.aside`

background-color:teal;
position: -webkit-sticky;
  position: sticky;
  top: 0;
height:100vh;




 
/*remove sidebar below this size */
@media (max-width: 768px) {
  display:none;
}

`;

/* Testing for sticky content to float over sidebar. */
const StickyTesting = styled.h1`
color:green;
position:sticky;


`;


export default function Email() {
    return (
      <SideWrap>
        <SideEmail>


        <StickyTesting>Hello</StickyTesting>
        
         
        </SideEmail>
        </SideWrap>
        
    )
}

