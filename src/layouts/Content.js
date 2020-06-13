import React, { Component } from 'react'
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import MyWork from "../components/sections/MyWork";
import Contact from "../components/sections/Contact";
import styled from '@emotion/styled';


const Wrapper = styled.div`
display: grid; 
grid-area:main;
`;

const Div = styled.div`
 display:grid;
 grid-template-columns:auto;
 grid-template-rows: repeat(4, 1fr);


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
