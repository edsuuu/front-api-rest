import styled from 'styled-components';

export const Container = styled.div`
     margin: 0 auto;
     max-width: 1400px;
     height: 91vh;
     padding: 20px;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
     flex-wrap: wrap;
`;


export const Title = styled.h1`


`;

export const Button = styled.button`
     width: 50%;
     padding: 20px;
     font-size:1.1rem;
     font-weight: bold;
     border-radius: 20px;
     border: 0.5px solid #0000008d;
     background-color: #ffffff;
     transition: .3s;
     cursor: pointer;
     &:hover{
          background-color: #0400ff42;
          color: #ececec;
     }

`;

export const Form = styled.form`

     background-color: #9ec2ff;
     width: 600px;
     height: auto;
     display: flex;
     flex-direction: column;
     align-items: center;
     border-radius: 10px;
     gap: 40px;
     padding: 40px 20px;
     label{
          margin-top:10px;
          padding: 5px;
          color: #000000;
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
          font-weight: bold;
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 70%;
          & .error{
               border: 1px solid #ff00008d;
          }

     }
     input {
               padding: 10px 15px;
               border-radius: 15px;
               font-size: 1.2rem;
               border: 0.5px solid #000000bd;
                &:focus {
                     border: 1px solid #00ffb3;
                    outline: none;
               }
          }

`;
