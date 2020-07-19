import React from 'react';
import styled from '@emotion/styled';
import mixin from '../styles/mixin';
import theme from '../styles/theme';
import { FaGithubSquare, FaLinkedin,FaTwitterSquare } from 'react-icons/fa';




const Foot = styled.footer`
bottom:0;
 grid-column: 1 / 4;
 grid-area: footer;
 width:100%;
 block-size: min(10vh);
    background-color:${theme.colors.darkNavy};
    color:${theme.colors.vLightSlate};
    ${mixin.centerStyles};
  
`;


const SocialList = styled.ul`
list-style-type:none;
align-content:center;
@media(min-width: 768px){
    display:none;
}

`;


const SocialListItem = styled.li`
display:inline-block;
font-size:24px;
padding-left:30px;
color: ${theme.colors.vLightSlate};
&:hover{
  color:${theme.colors.green};

  /* Come back to this for the styling remember!!! */ 
  transform: scale(1.150);
};

`;


export default function Footer() {
    return (
       


        <Foot>
        
        <SocialList> 
        <SocialListItem><FaGithubSquare /></SocialListItem>
        <SocialListItem><FaLinkedin /></SocialListItem>
        <SocialListItem><FaTwitterSquare /></SocialListItem>
       
        </SocialList>





        </Foot>
        
        
  


    )
}