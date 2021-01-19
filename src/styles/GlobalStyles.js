import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


html
{  margin: 0px;
  padding: 0px;
  border:0px;
  overflow-x:hidden;
 border-width: 0px;
 scroll-behavior: smooth;

};

a{
text-decoration:none;

}


/* visited link */
a:visited{
  color:inherit;
}

/* mouse over link */
a:hover {
  color: inherit;
}

/* selected link */
a:active {
  color: inherit;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
  border-color:inherit;
}
`;

export default GlobalStyles;