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
background-color:pink;
height:25vh;
width: 100%;
${centerStyles};
`;
export default class Contact extends Component {
    render() {
        return (
           <Div>

               <h1> Contact</h1>
           </Div>
        )
    }
}
