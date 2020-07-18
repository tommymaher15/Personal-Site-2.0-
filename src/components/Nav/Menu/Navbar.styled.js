
import styled from 'styled-components';
import theme from '../../../styles/theme';


export const StyledNav = styled.nav`
/* 
12/07/20

Open navigation  prop type. Dig into this a bit more today. 
   come back and reexplain to yourself tomorrow fam.

   /come back to the navigation. Fix the inner grid and see if that removes the spacing after adding border-box.

   */ 


 /*
 11/07/20 
 Changed from absolute to relative. slight improvement.
 come back to this. 
 problem is clearly to do with my navigation. come back to this tomorrow its the only way bro. 

 Carefully go through all styles again with a fresh mind. 
 */
  



  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.darkNavy};
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  overflow:hidden;
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: fixed;
  transition: transform 0.300ms ease-in-out;


  top: 0;
  right: 0;
  transition: transform 0.300ms ease-in-out;
  z-index: 10;

 /* Testing this to see if it works. come back if things go nuts. */ 
 
  /* */ 
  @media (max-width: 768px) {
    width: 50%;
    
  }

  a {
    font-family:"Calibre";
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${theme.colors.vLightSlate};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width:768px ) {
      font-size: 1.5rem;
      text-align: center;
    }
  
    &:hover {
      color:${theme.colors.green};
    }
  }
`;

