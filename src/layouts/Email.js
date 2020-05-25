import React from 'react';
import styled from '@emotion/styled';

/* Grid styles */
const SideWrap = styled.div`
display:grid;
grid-area:email;
`;


/* Sidebar Stylings */
const SideEmail = styled.aside`
background-color:teal;
position: sticky;
top:0;
height:100vh;

 
/*remove sidebar below this size */
@media (max-width: 750px) {
  display:none;
}

`;

/* Testing for sticky content to float over sidebar. */
const StickyTesting = styled.h1`
color:green;
position:sticky;
position: webkit-sticky;
top:0;
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

