import React, { Component } from 'react'
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import MyWork from "../components/sections/MyWork";
import Contact from "../components/sections/Contact";
import styled from '@emotion/styled';


const Wrapper = styled.div`
grid-area:main;
`;

const Div = styled.div`
 display:grid;

 grid-template-columns:1fr;
 /* It'll do for now. See what feedback is needed for this. */ 
 grid-template-rows: 1fr 1fr auto 1fr;
`;

export default class Content extends Component {
    render() {
        return (
            <Wrapper>
           <Div>
       <Hero></Hero>
       <About></About>
       <MyWork></MyWork>
       <Contact></Contact>
                
       </Div>
       </Wrapper>
        )
    }
}
