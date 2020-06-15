import React, { Component } from 'react'
import styled from '@emotion/styled';

import theme from '../../styles/theme';


//custom styling
/*const centerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
*/
const Div = styled.section`

background-color:${theme.colors.navy};

block-size:100%;
padding-bottom:6em;



`;

const HeroContent = styled.div`
margin-left:10em;
font-family: "Calibre";
display:flex;
height:100%;
border:2rem;
justify-content: center;
flex-direction: column;
align-items: flex-start;
left:-200px;




`;
const Heading1 = styled.h1`

color:${theme.colors.green};
font-family:"SF Mono";
font-size: clamp(0.5rem, 1vw + 1rem, 1.2rem);
font-weight:400;
line-height: 1;
padding-bottom:0;
padding-top:0;
margin-bottom:0;






`;

const Heading2 = styled.h2`
color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight: 600;
font-size: clamp(4rem, 1vw + 1rem, 5rem);
padding-bottom:0;
padding-top:0;
margin-bottom:0;
border-bottom:0;
line-height:1;
margin-top:25;
`;

const Heading3 = styled.h3`
color:${theme.colors.lightSlate};
font-family:"Calibre";
font-weight:600;
font-size: clamp(4rem, 1vw + 1rem, 5rem);
line-height:1;
margin-top: 0px;
    margin-bottom: 30px;
    margin-right: 100px;
    border-right-width: 100px;
    border-top-width: 10px;


`;

const HeroP = styled.p`
color:${theme.colors.slate};
font-family:"Calibre";
font-weight:400;
font-size:${theme.fontSizes.xl};
line-height:1.5;
display: block;
width: 50%;
max-width: 500px;
text-align:left;

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
margin-top:2em;



  

&:hover {
/* come back to this!! */
  color:red;
}




`;


export default class Hero extends Component {
    render() {
        return (
            <Div>
            <HeroContent>
       <Heading1> Hi, my name is  </Heading1>
       <Heading2> Tommy Maher.</Heading2>
       <Heading3>I solve problems using code.</Heading3>
       
       <HeroP>
        I am a Front end developer based in Dublin, Ireland specializing
        in building clean and robust products that solve your problems and look great. 
        </HeroP>
      

         <HeroBtn>Get in touch </HeroBtn>
           </HeroContent>
            </Div>
          
        )
    }
}
