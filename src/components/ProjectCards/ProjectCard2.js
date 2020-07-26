import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { FaGithubSquare,FaExternalLinkSquareAlt  } from 'react-icons/fa';




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
`;





const Heading1 = styled.h4`
font-size: 13px;
font-weight: normal;
color: ${theme.colors.green};
font-family: "SF Mono";
font-weight:400;
margin-top: 10px;
padding-top: 0px;`;

const Heading2= styled.h5`
font-size: 28px;
margin: 0px 0px 20px;
color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight:600;
`;

const Paragraph = styled.div`
padding: 25px;
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

`;



const SkillList = styled.ul`
display: flex;
flex-wrap: nowrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
align-content:flex-start;`;

const SkillListItem = styled.li`
padding-left:1em;
font-size: 13px;
color: ${theme.colors.vLightSlate};
margin-right: 20px;
margin-bottom: 7px;
white-space: nowrap;
;`;






const SocialList = styled.ul`
display: flex;
flex-wrap: nowrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
justify-content:flex-end;
align-content:flex-end;
top: -8rem;
align-self:flex-start;
position:relative;
top:3em;
`;

const SocialListItem = styled.li`
padding-left:1em;
font-size: 24px;
color: ${theme.colors.vLightSlate};
margin-right: 1em;
position:relative;
top:-2.5em;
white-space: nowrap;
&:hover{
  color:${theme.colors.green};
  transform: scale(1.150);
};
`;

const A = styled.a`

text-decoration:none;
color:inherit;

`;

const Anc = styled.a`
color:${theme.colors.green};
text-decoration:none;
`;


/* Reverse the Content. Think this one through.*/ 


export default class ProjectCard1 extends Component {
    render() {
        return (
            <Card>
             <CardContent>
            <Heading1>Featured Project</Heading1>
            <Heading2>Coming soon!</Heading2>
  
  
   <Paragraph>
   <p>Currently working on this project but feel free to check out my <Anc href ="https://twitter.com/TommyMa88163906">Twitter</Anc> for more information about it!
    </p>
  
   </Paragraph>
  
            <SkillList>
            
                <SkillListItem>React</SkillListItem>
                <SkillListItem>Coffee</SkillListItem>
                <SkillListItem>Javascript(ES6)</SkillListItem>
                
           </SkillList>
  
  
          <SocialList>
          <SocialListItem>
         <A href="https://github.com/tommymaher15/Personal-Site-2.0-"> <FaGithubSquare/></A>
          </SocialListItem>
  
          <SocialListItem>
          
          <A href=""> <FaExternalLinkSquareAlt/></A>
          </SocialListItem>
         
          </SocialList>
        
          </CardContent>
        
        </Card>
        )
    }
}