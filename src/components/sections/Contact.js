import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';



// Initial Nav working 
const Section = styled.section`
background-color:${theme.colors.navy};
block-size:100%;

`;


/* Flex container testing Starts here */ 
const FlexContainer = styled.div`
display:flex;
height:auto;

flex-direction:column;
justify-content: center;
align-items:flex-end;
position:relative;
top: -6em;


@media (min-width: 768px){
    top: -6em;
    position:relative;
    align-items:flex-end;
    justify-content:flex-end;
    };

`;


const ContactHeading = styled.h3`
/* What next? */
align-self:center;
color:${theme.colors.green};
font-family:"SF Mono";
font-size: clamp(0.5rem, 1vw + 1rem, 1.2rem);
font-weight:400;



::before
{
    
counter-increment: section 3;
/* come back to this for navigation? */ 
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

`;


const SubHead = styled.h4`

align-self:center;


color:${theme.colors.vLightSlate};
font-family:"Calibre";
font-weight: 600;
line-height:1;
font-size: 3.5em;
margin-bottom: -1px;


`; 
const Paragraph = styled.p`
align-self:center;
width:50%;
color:${theme.colors.slate};
font-family:"Calibre";
font-weight:400;
font-size:${theme.fontSizes.xl};
line-height:1.5;


max-width: 500px;

`;
/* Button Component */ 
const Hello = styled.button`
align-self:center;
width:25%;
color:${theme.colors.green};
background-color:transparent;
font-family:"SF Mono";
font-size:${theme.fontSizes.sm};

font-weight:400;
border: 1px solid ${theme.colors.green};
border-radius: 3px;
padding: 1.25rem 1.75rem;
line-height:1;
margin-top:2em;
`;

/* Flex end Test here. */


const MailLink = styled.a`
color:${theme.colors.green};
font-family:"SF Mono";
font-size:${theme.fontSizes.sm};
font-weight:400;
text-decoration:none;
`;




export default class Contact extends Component {
    render() {
        return (
     
           <Section>
             <FlexContainer>
     <ContactHeading><a href name = "contact">Whats Next?
     </a></ContactHeading>

        
               <SubHead>Get in touch</SubHead>

               <Paragraph>
               Want to reach out to me? My inbox is always open.
               I'm currently looking for job opportunities but if you have a
               Question or just want to say hello! I'll try my best to get
               back to you. 
               
               </Paragraph>

               <Hello><MailLink href = "mailto: tommymaher10@gmail.com">Say Hello</MailLink></Hello>

               </FlexContainer>




           </Section>
        )
    }
}
