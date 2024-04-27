import styled from "styled-components";

export const Title = styled.h1`
     margin-top: 50px;
`;

export const Container = styled.div`
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     margin-top: 50px;
     border: 1px solid #ccc;
     background-color: #ccc;
     padding: 20px;
`;

export const Form = styled.form`

     label {
          border-radius: 50%;
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid black;
          background-color: #eee;
          margin: 30px auto;
          cursor: pointer;

          img {
               width: 180px;
               height: 180px;
               border-radius: 50%;
          }
     }

     input {
          display: none;
     }
`;
