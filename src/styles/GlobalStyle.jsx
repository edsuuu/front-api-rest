import styled, { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

// import * as colors from '../config/colors';

export default createGlobalStyle`
     *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
     }

     body {
          background-color: #1a1a1a;

          .Toastify {
               font-family: 'Roboto', sans-serif;
               div {
               }
               .toast-container {
                    width: auto;
                    margin-top: 4%;

               }
          }
     }
     nav {
          background-color: white;
          & ul {
               display: flex;
               justify-content: center;
               gap: 30px;
               padding: 20px;
               list-style: none;
          }
     }
`;

export const Container = styled.div`
     background-color: white;
`;
