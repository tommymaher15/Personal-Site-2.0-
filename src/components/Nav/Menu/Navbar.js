import React from 'react';
import Burger from "../Burger/Burger";
import styled from 'styled-components';
import ResponsiveMenu from 'react-responsive-navbar';
//TODO Find another way to build the navigation bar, make it responsive and implement a smoother transition for the mobile navigation


function Navbar() {
  return (
      <NavBarStyle>
       <ResponsiveMenu
        menuOpenButton={<Burger/>}
        menuCloseButton={<Burger/>}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="smalnpml-menu-classname"
        menu={
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        }
      />
  </NavBarStyle>
  )
}

export default Navbar

const NavBarStyle = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:flex-end;
align-items:center; 
@media (max-width: 500px){

  justify-content:center;
}

li{

  display: inline;
  color:grey

 

}

.large-menu-classname {
  color:yellow;
  flex-direction:row; 
  justify-content:flex-end;
  align-items:flex-end;
  text-decoration:none;
  



}

.large-menu-classname li {
padding:1em;
justify-self:center;
align-self:center;
}

.smalnpml-menu-classname{
  width:100%;
  height:100%;

  

}

.smalnpml-menu-classname li {
  display: block;
  padding:1em;
}


`;
