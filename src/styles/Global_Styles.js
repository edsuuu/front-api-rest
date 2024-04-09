import { createGlobalStyle } from 'styled-components';
import {
     primaryColor,
     secondaryColor,
     sucessColor,
     infoColor,
     warningColor,
     errorColor
} from '../config/colors';


export default createGlobalStyle`
     *{
          margin: 0;
          padding: 0;
          outline: none;
          box-sizing: border-box;
     }

     body {
          font-family: sans-serif;
     }

     button {
          cursor: pointer;
     }

     a {
          text-decoration: none;
     }

     ul {
          list-style: none;
     }
`;
