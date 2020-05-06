import React, { Component } from 'react'
import styled from '@emotion/styled';


 const BigBtn = styled.button`
 border-radius:2px;
 color:red;
 background-color:blue;

 
 `;
// When importing a component, make sure its a class that EXTENDS a component followed by a render dog. 
export default class Button extends Component {
   

    render() {
        return (
         
                <BigBtn> Hello</BigBtn>
          )
    }
}
