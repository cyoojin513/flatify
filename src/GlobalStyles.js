import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #141311;
  }

  * {
    font-family: sans-serif;
  }

  h1, h2 {
    color: white
  }

  h1 {
    font-size: 4.5em;
  }

  h2.home-h2 {
    padding: 25px 0px 0px;
  }
`

export default GlobalStyles;