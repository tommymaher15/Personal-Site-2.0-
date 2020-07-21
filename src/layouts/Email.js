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
  padding-right:4em;
  


/* Position top, keep the sticky for the CONTENT! */ 
`;
/* 
Anchor tag for contact details. Remake as a component possibly.
Come back for the Animations Later. for now focus on the other contact tags. 

*/
const MailLink = styled.a`
font-size:14px;
padding:30px;
letter-spacing: 0.2em;
font-family:"SF Mono";
font-weight:300;
writing-mode: vertical-rl;
cursor: pointer;
text-decoration:none;

position: relative;
    top: 2.1em;
color:${theme.colors.lightSlate};
&:hover{
 color:${theme.colors.green};

};

::after
{
content: "";
display: inline-block;
width: 1px;
height: 9.4vh;
margin-top:2.4em;
background-color: rgb(168, 178, 209);
}

`;


export default function Email() {
    return (
   
        <SideEmail>
<StickyTesting>


<MailLink href = "mailto: tommymaher10@gmail.com">tommymaher10@gmail.com</MailLink>



</StickyTesting>
        </SideEmail>
     
        
    )
}

