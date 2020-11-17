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
               <h5>My Personal Website</h5>
              
                <p>The second iteration of my personal website. Built with ReactJS.
               </p>
               
               <ul>

                 <li>React</li>
                 <li>Styled Components</li>
                 <li>Javascript(ES6)</li>
                
               </ul>
              
             
            <Socials github = "https://github.com/tommymaher15/Personal-Site-2.0-" link = "https://www.tommymaher.io/" />
         </CardContent>
         
        </Card>
       <CardImage>

       <a href = "https://www.tommymaher.io/">
       <Overlay /> 
          <img src = {Image} alt = "personal website"></img>
          </a>
          </CardImage>
        </ProjectWrapper>
        )
    }
}

const ProjectWrapper = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
position:relative;
`;

const Overlay = styled.div`
 @media (max-width: 768px) {
      display:none;
    }

background-color: rgba(24, 16, 64, 0.54);

width: 100%;
height: 77%;
position: absolute;
&:focus {
  background-color:none;
}
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
@media (max-width: 768px) {
      img{display:none;}
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