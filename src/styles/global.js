import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/app-background.svg';


export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    color: #e6e6e6;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
  
  .toast-container .dark-toast {
    background: #bd4f4f;
    border-radius:4px;
    text-align:center;
  }
`;
