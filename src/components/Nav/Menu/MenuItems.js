import React from 'react'
import styled from '@emotion/styled';
import {Link} from 'react-scroll'


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
  

export default function MenuItems() {

  // if open === false, return null else return menu item. 
  

    return (
        <MenuItemStyle >
             <ul>
    {headersData.map(item => {
      return (
        <li
          key={item.id}>
          <Link
          to={item.id}spy={true} smooth={true}
          >
        
        {item.label}
        </Link>
        </li>
      );
    })}
   
  </ul>
        </MenuItemStyle>
    )
}


const MenuItemStyle = styled.div`


`;