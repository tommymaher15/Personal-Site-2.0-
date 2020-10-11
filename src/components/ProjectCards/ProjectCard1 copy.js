import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import Socials from "../Icons/Socials";
import Image from "./project1.png";

export default class ProjectCard1 extends Component {
    render() {
        return (
          <ProjectWrapper>
            <Card>
               <CardContent>
             
               <h4>Featured Project</h4>
               <h5>Coming soon!</h5>
              
                <p>Currently working on this project but feel free to check out my
                  <a href ="https://twitter.com/TommyMa88163906"> Twitter </a>
                for more information about it!
               </p>
               
               <ul>
                 <li>React</li>
                 <li>RESTful Api</li>
                 <li>Javascript(ES6)</li>
                
               </ul>
              
             
            <Socials />
         </CardContent>
        </Card>
       <CardImage>   <img src = {Image} alt = "personal website"></img></CardImage>
        </ProjectWrapper>
        )
    }
}

const ProjectWrapper = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
`;


// Styles 

const Card = styled.div`

background-color:${theme.colors.Navy};

width: 100%;

@media (min-width: 768px) {
  padding: 20px;
width:70%;
margin-left:8em;
};
`;


const CardImage = styled.div`
   grid-column: 4 / -3;
position: relative;
right: 2em;
img{
  width:100%;
  height:auto;
}
`;


const CardContent = styled.div`

grid-column: 1 / 10;
  

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }
    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  
h4{
  font-size: 13px;
font-weight: normal;
color: ${theme.colors.green};
font-family: "SF Mono";
font-weight:400;
margin-top: 10px;
padding-top: 0px;}

h5{

font-size: 28px;
margin: 0px 0px 20px;
color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight:600;}

p
{
padding: 25px;
color: rgb(168, 178, 209);
font-size: 18px;
border-radius: 3px;
box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
background-color: ${theme.colors.lightNavy};
width:65%;


@media (min-width: 768px){
  
  width:110%;
}

a{
  color:${theme.colors.green};
text-decoration:none;
}
}
ul{display: flex;
flex-wrap: nowrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
align-content:flex-start;}
li
{
padding-left:1em;
font-size: 13px;
color: ${theme.colors.vLightSlate};
margin-right: 20px;
margin-bottom: 7px;
white-space: nowrap;
}


`;