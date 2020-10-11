import React from 'react'
import styled from '@emotion/styled';
import { FaGithubSquare,FaExternalLinkSquareAlt  } from 'react-icons/fa';
import theme from '../../styles/theme';
const Socials = (props) => {
    return (
        <SocialList>
        <SocialListItem>
       <A href={props.github}> <FaGithubSquare/></A>
        </SocialListItem>

        <SocialListItem>
        
        <A href={props.link}> <FaExternalLinkSquareAlt/></A>
        </SocialListItem>
       
        </SocialList>
    )
}

export default Socials




const SocialList = styled.ul`
display: flex;
flex-wrap: nowrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
justify-content:flex-end;
align-content:flex-end;
top: -8rem;

position:relative;
top:3em;
`;

const SocialListItem = styled.li`
padding-left:1em;
font-size: 24px!important;
color: ${theme.colors.vLightSlate};
margin-right: 1em;
position:relative;
top:-2.5em;
white-space: nowrap;
&:hover{
  color:${theme.colors.green};
  transform: scale(1.150);
};
`;

const A = styled.a`

text-decoration:none;
color:inherit;

`;
