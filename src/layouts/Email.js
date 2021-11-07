import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";





/* Sidebar Stylings */





export default function Email() {
    return (
    <SideEmail>
       <div>
    <a href = "mailto: tommymaher10@gmail.com">tommymaher10@gmail.com</a>
       </div>
       <h1>Hello World</h1>
       <h2>Hi</h2>
        </SideEmail>
    )
}


const SideEmail = styled.aside`
background-color:${theme.colors.navy};
    color:${theme.colors.vLightSlate};
grid-area: email;

@media (max-width: 768px) {
  display:none;
}

div{
    position: fixed;
  bottom: 0;
  right: 0;
  padding-right:4em;


}

a{font-size:14px;
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
}}
`;


