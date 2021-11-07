import React, { Component } from 'react'
import styled from '@emotion/styled';
import theme from '../../styles/theme';



// Initial Nav working 
const Section = styled.section`
background-color:${theme.colors.navy};


`;


/* Flex container testing Starts here */ 
const FlexContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: flex-end;
align-items:center;
position:relative;
top: 20em;


@media (min-width: 768px){
    top: 11em;
    position:relative;
  
    };

`;


const ContactHeading = styled.h3`

align-self:center;
color:${theme.colors.green};
font-family:"SF Mono";
font-size: clamp(0.5rem, 1vw + 1rem, 1.2rem);
font-weight:400;
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
const Btn = styled.button`
align-self:center;
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
outline: none;
cursor: pointer;
transition: color 0.3s linear;


&:hover {
/* come back to this!! */
  background-color:${theme.colors.green};
  color:${theme.colors.navy};
  opacity:0.7;
}
`;

/* Flex end Test here. */


const A = styled.a`
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

     <ContactHeading id = "contact">
    Whats Next?
     </ContactHeading>

        
               <SubHead>Get in touch</SubHead>

               <Paragraph>
               Want to reach out to me? My inbox is always open.
               I'm currently working on an exciting project which I will be announcing soon.If you have a
               question or just want to say hello I'll try my best to get
               back to you! asdfadsfadsfa
               
               </Paragraph>  
 
               <A href = "mailto: tommymaher10@gmail.com"><Btn>Say Hello</Btn></A>
 asdfadsfadsfadsfasdf
               </FlexContainer>




           </Section>
        )
    }
}
