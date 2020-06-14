import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";





/* Sidebar Stylings */
const SideEmail = styled.aside`

background-color:${theme.colors.navy};
    color:${theme.colors.vLightSlate};
grid-area: email;



/*remove sidebar below this size */
@media (max-width: 768px) {
  display:none;
}

`;

/* Testing for sticky content to float over sidebar. */
const StickyTesting = styled.h1`
color:${theme.colors.vLightSlate};
transform: rotate(90deg);
position: sticky;
position: -webkit-sticky;
/* Position top, keep the sticky for the CONTENT! */ 
top: 300px;



`;


export default function Email() {
    return (
   
        <SideEmail>


        <StickyTesting>Hello</StickyTesting>
        
         
        </SideEmail>
     
        
    )
}

