import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import ProjectCard1 from "../ProjectCards/ProjectCard1";
import ProjectCard2 from "../ProjectCards/ProjectCard2";



const Div = styled.section`

background-color:${theme.colors.navy};


`;
/*OverArching Grid Container.
Come back to this for scaling the project.

Do this tomorrow brain is fried today. 


*/

const GridContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;

  list-style: none;
  margin: 0 20px;
 background: blue !important;
`;







const HeadingTitle = styled.h3`
::before{
    counter-increment: section 2;
    content: "0" counter(section) ".";
    margin-right: 10px;
    font-family: "SF Mono";
    font-weight: 400;
    color:${theme.colors.green};
    font-size: 20px;
    position: relative;
    padding-left:2em;
    };

   
    @media (min-width: 768px) {
      ::after
    {
    content: "";
    display: block;
    height: 1px;
    width: 300px;
    background-color:#303c55;
    position: relative;
    top: -15px;
    margin-left: 13.5em;}
    };


    
    padding-left:-1em;
    font-size:22px;
    font-weight: 600;
    color: ${theme.colors.vLightSlate};

    @media (min-width: 768px) {font-size:30px;
    font-weight: 600;
    };
`;

const HeadingContainer = styled.div`

display:flex;
justify-content:center;


`;



export default class MyWork extends Component {
    render() {
        return (
           <Div>
             <HeadingContainer>
           <HeadingTitle id = "work">Some Things I've Built</HeadingTitle>
           </HeadingContainer>
              <GridContainer>
 <ProjectCard1 /> 
 <ProjectCard2 /> 
           </GridContainer>
           </Div>
        )
    }
}
