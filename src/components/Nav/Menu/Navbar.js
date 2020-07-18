import React from 'react';
import { StyledNav} from './Navbar.styled';
import { bool } from 'prop-types';


const Navbar = ({ open }) => {
  return (

    

    
    <StyledNav open={open}>

      <a href="#about">

        About 
      </a>

      <a href="#work">
       
    My Work
        </a>
        
      <a href="#contact">
        
        Contact 
        </a>
    </StyledNav>
  )
}

Navbar.propTypes = {
  open: bool.isRequired,
}
export default Navbar;