import React from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import Image from "./myimg.jpg";



const Section = styled.section`

background-color:${theme.colors.navy};


block-size:100%;
margin-bottom:4em;

`;


const AboutHeader = styled.div`

padding-left:2em;
padding-top:2em; `;

const AboutHeading = styled.h3`


font-family:"Calibre";
font-size:32px;
font-weight:600;
color:${theme.colors.vLightSlate};



::before
{counter-increment: section 1;
content: "0" counter(section) ".";
margin-right: 10px;
font-family: "SF Mono";
font-weight: normal;
font-size:32px;
color: rgb(100, 255, 218);
font-size: 20px;
position: relative;
bottom: 4px;
};

::after
{
content: "";
display: block;
height: 1px;
width: 300px;
background-color: rgb(48, 60, 85);
position: relative;
top: -20px;
margin-left: 5.9em;
};

`;

const Container = styled.div` 
 display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  border:2rem;

margin:2em;
margin-bottom:8em;
margin-top:3em;
margin-left:4em;
margin-right:2em;

`;
/* Flexbox children for the container details are here. */
const TextFlex = styled.div`
width: 60%;
max-width: 480px;
font-family:"Calibre";
font-weight:400;
color:${theme.colors.slate};
font-size:20px;
margin-top:0;

`;

const ImgFlex = styled.div ` 

position: relative;
width: 40%;
max-width: 300px;
margin-left: 60px;
`;

/* Flex End */ 


 const AboutImg = styled.img`
  max-width: 100%;
  height: auto;
  position:relative;
  bottom:4em;
  
  `;
  


/* List component eventually */
const SkillList = styled.ul`
display:grid;
grid-template-columns: repeat(2, minmax(140px,200px));

`;
 const SkillItem = styled.li`
 list-style:none;
 ::before{
  content: "▹";
padding-right:10px;
font-size: 14px;
line-height: 12px;
color:${theme.colors.green};
 };
 
 `;



/* List Component End here */ 

export default function About() {
    return (
 <Section>
<AboutHeader>

<AboutHeading>About Me</AboutHeading>

</AboutHeader>

<Container>
<TextFlex>
 <p>Hi! I'm Tommy, I'm a front end  engineer from Dublin, Ireland.</p> 

 <p>
 I enjoy creating things that exist online, Whether it is a website, application or anything in between.
  My goal is to build a performant and robust product that provides the user with a great experience.
  </p>
  <p> I fell in love with software development and I find its a constant learning experience every day.</p>
  
  <p> Here are some technologies I've been working with recently:</p>
  <SkillList>
    
   <SkillItem>Html & CSS</SkillItem>
   <SkillItem>React</SkillItem>
   <SkillItem>JavaScript (ES6+)</SkillItem>
   <SkillItem>Styled Components</SkillItem>
   
</SkillList>




</TextFlex>
<ImgFlex>
    <AboutImg src={Image} alt =""></AboutImg>
</ImgFlex>


</Container>




 </Section>


            
       
    )
}
