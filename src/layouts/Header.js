import React from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";
import {Link} from 'react-scroll'
//TODO 
/*
Create Menu List 
 a Map function to iterate through the data set I'm gonna write for the navigation.
Create Menu Toggle 

React does not work with A tags for internal navigation. 

*/


const headersData = [
  {
    label: "About",
    id: "about"
  },
  {
    label: "Work",
    id: "work"
  },
  {
    label: "Contact",
    id: "contact"
  }]; 


export default function Header() {
    return (
    <HeadBar>
    <ul>
    {headersData.map(item => {
      return (
        <li
          key={item.id}>
          <Link
          to={item.id}spy={true} smooth={true}>
        
        {item.label}
        </Link>
        </li>
      );
    })}
   
  </ul>
    </HeadBar>
)};




const HeadBar = styled.header`
    width:100%;
    grid-column: 1 / 4;
    grid-area: header;
    block-size: min(12vh);
    background-color:${theme.colors.navy};
    display:flex;
   justify-content:flex-end;
   align-content:center;

   ul {


    color:white;
   }

   li{
     padding:1em;
    cursor: pointer;
    display:inline;
  
   }
`;









  