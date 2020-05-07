import React, { Component } from 'react'
import styled from '@emotion/styled';
import {  css } from '@emotion/core';



const centerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.section`
color:red;
background-color:yellowgreen;
${centerStyles};
height: 25vh;

`;


export default class Hero extends Component {
    render() {
        return (
            <Div>
       <h1>Hi my name is</h1> 
       
       <h2>Tommy Maher</h2> 
        
       <h3>I build things on the web.</h3>



         <button>Get in Touch</button>

            </Div>
          
        )
    }
}
