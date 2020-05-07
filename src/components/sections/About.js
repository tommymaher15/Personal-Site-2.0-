import React, { Component } from 'react'
import styled from '@emotion/styled';
import {  css } from '@emotion/core';



const centerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Div = styled.section`
color:blue;
background-color:palevioletred;
height:25vh;


${centerStyles};
`;

export default class About extends Component {
    render() {
        return (
            <Div>  <h1> About me</h1></Div>

         
            
        )
    }
}
