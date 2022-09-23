import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  //DECLARANDO VARIAVEIS DE COR / PALETA
  
  :root {
        --background-blue: #e9ecf5;
        --post-white: #fff;
        --title-blue: #29325D;
        --text-grey: #666;
        --button-grey: #e8e8e8;
        --purple-1: #6c80be
    }
  
  body{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    font-family: sans-serif, "Source Sans Pro";
    background-color: var(--background-blue);
  }

  .App {
    padding: 25px;
    width: 700px;
  }
`;
