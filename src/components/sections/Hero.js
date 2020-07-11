import React, { Component } from 'react'
import styled from '@emotion/styled';

import theme from '../../styles/theme';


const Div = styled.section`

background-color:${theme.colors.navy};

block-size:100%;

@media (min-width: 768px){
    padding-bottom:6em;
};

`;

const HeroContent = styled.div`


display:flex;
height:100%;
width:100%;
padding-top:2em;
padding-left:1em;
flex-direction: column;
align-items: flex-start;



@media (min-width: 768px){
    border:2rem;
margin-left:10em;
};


`;
const Heading1 = styled.h1`

color:${theme.colors.green};
font-family:"SF Mono";
font-size: 1rem;
font-weight:400;


@media (min-width: 768px){
    line-height: 1;
padding-bottom:0;
padding-top:0;
margin-bottom:0;
};



`;

const Heading2 = styled.h2`
color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight: 600;
font-size: 2.8rem;
padding-bottom:0;
padding-top:0;
margin-bottom:0;
border-bottom:0;
line-height:1;


@media (min-width: 768px){
    font-size: clamp(3rem, 2vw, 5rem);

};

`;

const Heading3 = styled.h3`
color:${theme.colors.lightSlate};
font-family:"Calibre";
font-weight:600;
font-size: 2.9rem;
line-height:1;
margin-top: 0px;
    margin-bottom: 30px;
    margin-right: 100px;
    border-right-width: 100px;
    border-top-width: 10px;
    width:50%;

    @media (min-width: 768px){
    font-size: clamp(3rem, 2vw, 5rem);

};


`;

const HeroP = styled.p`
color:${theme.colors.slate};
font-family:"Calibre";
font-weight:400;
font-size:${theme.fontSizes.xl};
line-height:1.5;

width: min(400px,40%);
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


const MailLink = styled.a`
color:${theme.colors.green};

font-family:"SF Mono";
font-size:${theme.fontSizes.sm};

font-weight:400;
text-decoration:none;
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
     
      

         <HeroBtn><MailLink href = "mailto: tommymaher10@gmail.com">Get in Touch</MailLink></HeroBtn>
           </HeroContent>
            </Div>
          
        )
    }
}
