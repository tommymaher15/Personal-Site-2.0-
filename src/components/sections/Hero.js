import React, { Component } from 'react'
import styled from '@emotion/styled';
import {  css } from '@emotion/core';
import theme from '../../styles/theme';


//custom styling
const centerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled.section`

background-color:${theme.colors.lightNavy};
${centerStyles};
block-size:100%;
display:flex;
padding: 200px 150px;
line-height: 1.3;
`;

const HeroContent = styled.div`
font-family: "Calibre"

`;
const Heading1 = styled.h1`

color:${theme.colors.green};
font-family:"SF Mono";
font-size:${theme.fontSizes.md};
font-weight:400;
line-height:20.8px;


`;

const Heading2 = styled.h2`
color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight: 600;
font-size:80px;
line-height:1.1px;
`;

const Heading3 = styled.h3`
color:${theme.colors.lightSlate};
font-family:"Calibre";
font-weight:600;
font-size:80px;
line-height:1.1px;
`;

const HeroP = styled.p`
color:${theme.colors.slate};
font-family:"Calibre";
font-weight:400;
font-size:${theme.fontSizes.xl}
`;

const HeroBtn = styled.button`
color:${theme.colors.green};
background-color:transparent;
font-family:"SF Mono";
font-size:${theme.fontSizes.sm};
font-weight:400;
border: 1px solid ${theme.colors.green};
border-radius: 3px;
padding: 1.25rem 1.75rem;
line-height:1;

    

&:hover {
/* come back to this!! */
  
}




`;


export default class Hero extends Component {
    render() {
        return (
            <Div>
            <HeroContent>
       <Heading1> Hi, my name is  </Heading1>
       <Heading2> Tommy Maher.</Heading2>
       <Heading3>I'm a Web Developer.</Heading3>
       
       <HeroP>
       I'm a web developer based in Dublin, Ireland specializing
        in building websites,apps and
         anything else that resides online.
          </HeroP>
      

         <HeroBtn>Get in touch </HeroBtn>
           </HeroContent>
            </Div>
          
        )
    }
}
