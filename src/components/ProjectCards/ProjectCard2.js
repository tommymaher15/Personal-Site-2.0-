import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import Socials from "../Icons/Socials";




export default class ProjectCard1 extends Component {
    render() {
        return (
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
        )
    }
}




/* Project card Styles */ 
const Card = styled.div`
 display: flex;
flex-direction: column;
justify-content: flex-start;
background-color:${theme.colors.Navy};
box-shadow: -5px 4px 5px 0px rgba(0, 0, 0, 0.3);
width: 100%;

@media (min-width: 768px) {
  padding: 20px;
width:70%;
margin-left:8em;
};
`;


const CardContent = styled.div`
display:flex;
align-content:flex-end;
justify-content:center;
align-items:flex-end;
flex-direction:column;

h4{
  font-size: 13px;
font-weight: normal;
color: ${theme.colors.green};
font-family: "SF Mono";
font-weight:400;
margin-top: 10px;
padding-top: 0px;}

h5{font-size: 28px;
margin: 0px 0px 20px;
color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight:600;}


p{padding: 25px;
color: rgb(168, 178, 209);
font-size: 18px;
border-radius: 3px;
box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
background-color: ${theme.colors.lightNavy};
width:65%;
align-content:center;
justify-content:center;

@media (min-width: 768px){
  
  width:33%;
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
