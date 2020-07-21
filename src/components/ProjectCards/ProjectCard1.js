import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { FaGithubSquare,FaExternalLinkSquareAlt  } from 'react-icons/fa';





const Card = styled.div`
 display: flex;
flex-direction: column;
background-color:${theme.colors.Navy};

box-shadow: -5px 4px 5px 0px rgba(0, 0, 0, 0.3);
width: 100%;

@media (min-width: 768px) {
  
  padding: 20px;
width:60%;
margin-left:8em;
};

`;

const SkillList = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
align-content:flex-end;`;

const SkillListItem = styled.li`
padding-left:1em;
font-size: 13px;
color: ${theme.colors.vLightSlate};
margin-right: 20px;
margin-bottom: 7px;
white-space: nowrap;
;`;


const Heading1 = styled.h4`font-size: 13px;
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

const Paragraph = styled.div`padding: 25px;
color: rgb(168, 178, 209);
font-size: 18px;
border-radius: 3px;
box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
background-color: ${theme.colors.lightNavy};
width:65%;
align-content:center;
justify-content:center;


@media (min-width: 768px){
  
  width:33%;};

`;




const SocialList = styled.ul`
display: flex;
flex-wrap: nowrap;
padding: 0px;
margin: 25px 0px 10px;
list-style: outside none none;
justify-content:flex-end;
align-content:flex-end;
top: -8rem;`;

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




export default class ProjectCard1 extends Component {
    render() {
        return (
            <Card>
        
            <Heading1>Featured Project</Heading1>
            <Heading2>My Personal Website</Heading2>
  
  
   <Paragraph>
   <p>Built with React, This project was such a learning experience for me. 
   I kept the design simple and will be iterating on it constantly overtime.
    This will be a place for me to showcase all my work going forward!
    </p>
  
   </Paragraph>
  
            <SkillList>
            
                <SkillListItem>React</SkillListItem>
                <SkillListItem>HTML & CSS</SkillListItem>
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
        
  
        
        </Card>
        )
    }
}




