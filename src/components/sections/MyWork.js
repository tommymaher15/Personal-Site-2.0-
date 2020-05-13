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
background-color:darkcyan;
block-size:100%;
${centerStyles};
`;

export default class MyWork extends Component {
    render() {
        return (
           <Div>

               <h2> My Work</h2>
           </Div>
        )
    }
}
