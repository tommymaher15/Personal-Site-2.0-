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
const StickyTesting = styled.div`
 position: fixed;
  bottom: 0;
  right: 0;
  padding-left:2em;
  


/* Position top, keep the sticky for the CONTENT! */ 
`;

const MailLink = styled.p`
font-size:14px;
padding:30px;
letter-spacing: 0.1em;
font-family:"SF Mono";
font-weight:300;
padding: 10px;
writing-mode: vertical-rl;

&:hover{
  color:${theme.colors.green};
  transform: scale(1.1);
};

::after
{
content: "";
display: inline-block;
width: 1px;
height: 11vh;
margin-top:1.5em;
background-color: rgb(168, 178, 209);
}

`;


export default function Email() {
    return (
   
        <SideEmail>
<StickyTesting>

<MailLink>tommymaher10@gmail.com</MailLink>




</StickyTesting>
        </SideEmail>
     
        
    )
}

