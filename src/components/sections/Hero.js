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
block-size:100%

`;


export default class Hero extends Component {
    render() {
        return (
            <Div>
       <h1> Testing </h1>


         <button>Btn </button>

            </Div>
          
        )
    }
}
