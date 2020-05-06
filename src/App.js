import React from 'react';
import Header from './layouts/Header';
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";
import './App.css';
import styled from '@emotion/styled';
import Email from './layouts/Email';
import Content from "./layouts/Content";




const Grid = styled.div`
 block-size: min(100vh);
  margin: 0;
  padding: 0;

  @media (min-width: 1000px) {
    display: grid;
    grid-template-areas:
      "header header header"
      "sidebar main email"
      "sidebar footer email";
    grid-template-rows:  auto;
    grid-template-columns: 7vw auto 7vw;
  }
`;





function App() {
  return (
  <Grid>
    

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
