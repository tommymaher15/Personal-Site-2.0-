import React from 'react';
import Header from './layouts/Header';
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";
import styled from '@emotion/styled';
import Email from './layouts/Email';
import Content from "./layouts/Content";
import GlobalFonts from "./styles/fonts";


const Grid = styled.div`
 block-size: min(100vh);
 display:grid;
 grid-template-columns: 1fr;
 grid-template-rows:min-content 1fr min-content;
 grid-template-areas:
 "header header header"
 "main   main    main "
 "footer footer footer";

 @media (min-width: 768px) {
    display: grid;
    grid-template-areas:
      "header header header"
      "sidebar main   email"
      "sidebar footer email";
    grid-template-rows: min-content 1fr min-content;
    grid-template-columns: 7vw 1fr 7vw;
  }


`;





function App() {
  return (
    
  <Grid>
  <GlobalFonts/>
 
    

<Header />
<Sidebar />


<Content> 

</Content>

<Email />

<Footer />

</Grid>

  );
}

export default App;
