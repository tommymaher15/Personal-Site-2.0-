import React,{ useState,useRef } from 'react';
import styled from '@emotion/styled';
import theme from "../styles/theme";
import Navbar from '../components/Nav/Menu/Navbar';
import Burger from "../components/Nav/Burger/Burger";
import { useOnClickOutside } from '../Hooks';

const HeadBar = styled.header`
    width:100%;
    grid-column: 1 / 4;
    grid-area: header;
    block-size: min(10vh);
    background-color:${theme.colors.navy};
`;




export default function Header()


{   

    /* Sets the default state of the navigation/burger to closed.

   





    
    open = false */
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));





    return (
    
   <HeadBar>
  
  <div ref={node}>
<Navbar open={open} setOpen={setOpen}/>
<Burger open={open} setOpen={setOpen}/>
 </div>

</HeadBar>
    )
};
