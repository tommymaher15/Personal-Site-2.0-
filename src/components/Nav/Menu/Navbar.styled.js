
import styled from 'styled-components';
import theme from '../../../styles/theme';


export const StyledNav = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.navy};
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  
  @media (max-width: 768px) {
    width: 100%;
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

