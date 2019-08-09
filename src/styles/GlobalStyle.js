import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /**
  * If you already use line highlighting
  */

  /* Adjust the position of the line numbers */
  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }

  /**
  * If you only want to use line numbering
  */

  .gatsby-highlight {
    background-color: #fdf6e3;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }
  html {
    font-family: 'Karla';
    margin: 0;
    padding: 0;
  }
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #F8F8F8;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat;
    font-weight: bold;
  }


  .aspect-ratio {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  }
`

export default GlobalStyle;