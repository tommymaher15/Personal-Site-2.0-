import React,{Component}from 'react';
import styled from '@emotion/styled';
import theme from "../../styles/theme";
import MenuItems from "../../components/Nav/Menu/MenuItems"





export default class Header extends Component {


//TODO 

/* 
state and props. Look back into these.

*/ 

    render() {
        return (
     
       <HeadBar>
    <MenuItems  /> 



 
    </HeadBar>
          
        )
    }
}




const HeadBar = styled.header`
    width:100%;
    grid-column: 1 / 4;
    grid-area: header;
    block-size: min(12vh);
    background-color:${theme.colors.navy};
    display:flex;
    justify-content:flex-end;
    align-content:space-between;

    @media (max-width: 768px){
justify-content:center;
 

}



    li{
    color:${theme.colors.green};
    font-family: "SF Mono";
    font-size:16px;
    padding:3em;
    cursor: pointer;
    display:inline;

    @media (max-width: 768px){

        padding:2em;
    }
    }
`;





