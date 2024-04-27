import styled from "styled-components";

export const Container = styled.div`
     margin-top: 86px;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     gap: 100px;
     width: 100%;
     height: 90.7vh;
     background-color: #cccccc;
`;


export const Imagem = styled.div`
     width: 600px;
     margin-top: 5rem;
     img {
          width: 600px;
          height: 600px;
          border-radius: 20px;
     }
`;

export const Titulo = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Shadows+Into+Light&display=swap');
     width: 600px;
     margin-top: 13rem;
     text-align: center;
     display: flex;
     flex-direction: column;



     h1 {
          font-size: 3rem;
          font-family: "Abril Fatface", serif;
     }

     p {
          margin-top: 50px;
          @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
          font-size: 1.5rem;
          font-family: 'Shadows Into Light', cursive;
          width: 100%;
     }
`;
