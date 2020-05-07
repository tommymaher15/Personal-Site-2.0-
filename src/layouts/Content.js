import React, { Component } from 'react'
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import MyWork from "../components/sections/MyWork";
import Contact from "../components/sections/Contact";
import styled from '@emotion/styled';


const Div = styled.div`
  grid-area: main;
  background-color: papayawhip;
  color: palevioletred;
  min-height: 100vh;
  width: 100%;
`;

export default class Content extends Component {
    render() {
        return (
           <Div>
       <Hero></Hero>
       <About></About>
       <MyWork></MyWork>
       <Contact></Contact>
                
       </Div>
        )
    }
}
