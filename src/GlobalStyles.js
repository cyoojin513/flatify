import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #141311;
  }

  * {
    font-family: 'Gotham Pro', sans-serif;
  }

  h1, h2 {
    color: white
  }

  h1 {
    font-size: 4em;
  }

  h2.home-h2 {
    padding: 25px 0px 0px;
  }

  h3 {
    font-weight: lighter;
    color: #acabac;
    margin-top: -20px;
    margin-bottom: 30px;
  }

  div.aboutHeader {
    text-align: center;
  }

  div.headerGrid {
    display: flex;
    justify-content: center;
  }

  h2.aboutPage {
    margin-top: 100px;
  }
`

export default GlobalStyles;

