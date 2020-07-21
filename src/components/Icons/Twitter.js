import React, { Component } from 'react'
import { FaTwitterSquare } from 'react-icons/fa';
import styled from '@emotion/styled';
import theme from "../styles/theme";

const SocialList = styled.ul`

transform: rotate(360deg);
position: relative;
    top: 1em;

padding-right:1em;
list-style-type:none;

::after
{
content: "";
display: block;
width: 1px;
height: 10vh;
margin: 0px auto;
background-color: rgb(168, 178, 209);

}
`;


const SocialListItem = styled.li`
font-size:24px;
padding:30px;
color: ${theme.colors.vLightSlate};


&:visited {color:${theme.colors.slate}}


&:hover{
  color:${theme.colors.green};



  cursor: pointer;
};




`;

const A = styled.a`
text-decoration:none;
color: inherit


`;

export default class Twitter extends Component {
    render() {
        return (
            <div>
                <SocialListItem><A href="https://twitter.com/TommyMa88163906"><FaTwitterSquare> </FaTwitterSquare></A> </SocialListItem>
            </div>
        )
    }
}
