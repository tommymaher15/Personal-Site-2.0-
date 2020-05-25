import React, { Component } from 'react'
import styled from '@emotion/styled';
import {  css } from '@emotion/core';
import theme from '../../styles/theme';


const centerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Section = styled.section`
background-color:${theme.colors.navy};
block-size:100%;
${centerStyles};
`;

const ContactHeading = styled.h3`

font-family:"Calibre";
font-size:32px;
font-weight:600;
color:${theme.colors.slate};



::before
{
    
counter-increment: section 3;
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

export default class Contact extends Component {
    render() {
        return (
           <Section>
     <ContactHeading>Whats next?</ContactHeading>
               
           </Section>
        )
    }
}
