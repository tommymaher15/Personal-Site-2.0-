import React from 'react';
import Header from './layouts/Header';
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";
import styled from '@emotion/styled';
import Email from './layouts/Email';
import Content from "./layouts/Content";
import GlobalFonts from "./styles/fonts";
//normalizing css. will come back to this for a better workaround later. 

import "../src/App.css";



const Grid = styled.div`
 block-size: min(100vh);
 display:grid;

 
 grid-template-rows:    min-content 1fr min-content;
 grid-template-areas:

 " header "
 "  main  "
 " footer ";

 @media (min-width: 768px) {
    display: grid;
 block-size: min(100vh);
    grid-template-areas:
      "header header header"
      "sidebar  main  email"
      "sidebar footer email";
    grid-template-rows: min-content 1fr min-content;
    grid-template-columns: min-content 1fr min-content;
  }

`;





function App() {
  return (
    
  <Grid>
  <GlobalFonts/>
<Header />
<Sidebar />
<Content /> 
<Email />
<Footer />
</Grid>

  );
}

export default App;
