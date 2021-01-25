import React, { Component } from 'react'
import styled from '@emotion/styled';

import theme from '../../styles/theme';
import Button from '../Buttons/Button';
import Emoji from "../Icons/Emoji";
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
padding-bottom:1em;
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

 

export default class Hero extends Component {
    render() {
        return (
            <Div>
            <HeroContent>
       <Heading1> Hi, my name is  </Heading1>
    
       <Heading2> Tommy Maher<Emoji symbol="👋" label="sheep" /> </Heading2>
       <Heading3>I create high quality software.</Heading3>
       
       <HeroP>
      I'm a software engineer based in Dublin Ireland that builds performant websites and applications that solve your problems and meet your business requirements.
        </HeroP>
     
      

     <Button />
           </HeroContent>
            </Div>
          
        )
    }
}
