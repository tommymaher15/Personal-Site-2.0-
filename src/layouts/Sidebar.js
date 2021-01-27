import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";
import { FaGithubSquare, FaLinkedin,FaTwitterSquare } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <Sidebar1>
        <div>
        <SocialList> 
        <SocialListItem><a href="https://github.com/tommymaher15"><FaGithubSquare /></a></SocialListItem>
        <SocialListItem><a href=" https://www.linkedin.com/in/tommymaher10/"><FaLinkedin /></a></SocialListItem>
        <SocialListItem><a href="https://twitter.com/TommyMa88163906"><FaTwitterSquare> </FaTwitterSquare></a> </SocialListItem>
        </SocialList>
        </div>
        </Sidebar1>
      
    )
}


const Sidebar1 = styled.aside`
     background-color:${theme.colors.navy};
    grid-area: sidebar;

@media (max-width: 768px) {
  display:none;
}

div{ position: fixed;
  bottom: 0;
  left: 0;
}
`;

const SocialList = styled.ul`

transform: rotate(360deg);
position: relative;
    top: 1em;

padding-right:1em;
list-style-type:none;

::after
{
content: "";
display: block;
width: 1px;
height: 10vh;
margin: 0px auto;
background-color: rgb(168, 178, 209);

}
`;


const SocialListItem = styled.li`
font-size:24px;
padding:30px;
color: ${theme.colors.vLightSlate};


&:visited {
  color:${theme.colors.slate}
  }

&:hover{
  color:${theme.colors.green};
  cursor: pointer;
};

a{
  text-decoration:none;
 color: inherit
}
`;

