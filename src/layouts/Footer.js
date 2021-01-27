import React from 'react';
import styled from '@emotion/styled';
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
    display:flex;
    align-content:center;
justify-content:center;

`;


const SocialList = styled.ul`
list-style-type:none;


@media(min-width: 768px){
    display:none;
}



`;


const SocialListItem = styled.li`
display:inline-block;
align-self:center;
justify-self:center;
font-size:24px;
padding-left:1em;
color: ${theme.colors.vLightSlate};
&:hover{
  color:${theme.colors.green};

 
};

@media(max-width: 768px){
    padding-left:3em;
}

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