import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";
import { FaGithubSquare, FaLinkedin,FaTwitterSquare } from 'react-icons/fa';


const Sidebar1 = styled.aside`
 background-color:${theme.colors.navy};
    color:${theme.colors.vLightSlate};
grid-area: sidebar;

  


@media (max-width: 768px) {
  display:none;
}


`;




const StickyTesting = styled.div`
color:${theme.colors.vLightSlate};
transform: rotate(360deg);
font-size:24px;
position: sticky;
position: -webkit-sticky;
/* Position top, keep the sticky for the CONTENT! */ 
  top: 450px;
padding-right:1em;

 
`;

const SocialList = styled.ul`

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
padding:30px;
color: ${theme.colors.vLightSlate};
&:hover{
  color:${theme.colors.green};
  transform: scale(1.150);
};




`;

export default function Sidebar() {
    return (
 
        <Sidebar1> 
        
        
        <StickyTesting>
        <SocialList> 
        <SocialListItem><FaGithubSquare /></SocialListItem>
        <SocialListItem><FaLinkedin /></SocialListItem>
        <SocialListItem><FaTwitterSquare /></SocialListItem>
       
        </SocialList>

   
        </StickyTesting>
        
        
        </Sidebar1>
      
    )
}

