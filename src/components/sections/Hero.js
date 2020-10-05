import React, { Component } from 'react'
import styled from '@emotion/styled';

import theme from '../../styles/theme';
import Button from '../Buttons/Button';
// BORDER BOX + all the padding! is ruining the website! Take away the padding bro!
const Div = styled.section`

background-color:${theme.colors.navy};





`;

const HeroContent = styled.div`


display:flex;
height:100%;
   /*width:100%; */
   padding-top:4em;
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
@media (max-width: 768px){
   width:60%;


}
`;

 
const Wave = styled.span`


animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s;        /* Change to speed up or slow down */
  animation-iteration-count: infinite;  /* Never stop waving :) */
  transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
  display: inline-block;
  @keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}


`;


export default class Hero extends Component {
    render() {
        return (
            <Div>
            <HeroContent>
       <Heading1> Hi, my name is  </Heading1>
    
       <Heading2> Tommy Maher <Wave role="img" aria-label="waving-hand">👋</Wave></Heading2>
       <Heading3>I solve problems using code.</Heading3>
       
       <HeroP>
        I am a frontend developer based in Dublin, Ireland specializing
        in building clean and robust products that solve your problems and look great. 
        </HeroP>
     
      

     <Button />
           </HeroContent>
            </Div>
          
        )
    }
}
