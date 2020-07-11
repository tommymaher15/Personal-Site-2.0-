import React from 'react';
import { StyledNav} from './Navbar.styled';

const Navbar = () => {
  return (

    /* Open and close functionality tomorrow. 
      Figure out the clusterfuck of whitespace. 
  
      Figure out if the styles are fine for the nav. 
      Possible Rebuild? 

      HOPEFULLY NOT. 

      Come back at this tomrrow. 
      Almost there LOL 

    */ 
    <StyledNav>
   
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
export default Navbar;