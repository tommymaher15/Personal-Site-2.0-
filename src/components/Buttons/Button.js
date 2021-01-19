import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme'; 


export default class Button extends Component {
    render() {
        return (
            
            <A href = "mailto: tommymaher10@gmail.com"><Btn>Get in Touch</Btn></A>
          

        )
    }
}



const Btn = styled.button`
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
outline: none;
transition: color 0.3s linear;

  

&:hover {
/* come back to this!! */
  background-color:${theme.colors.green};
  color:${theme.colors.navy};
  opacity:0.7;
}




`;


const A = styled.a`
color:${theme.colors.green};

font-family:"SF Mono";
font-size:${theme.fontSizes.sm};

font-weight:400;
text-decoration:none;
cursor: pointer;

`;
