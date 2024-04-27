import styled from "styled-components";

export const Container = styled.div`
     margin-top: 110px;
     width: 100vw;
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const Perfil = styled.div`
     background-color: #ffffff;
     border-radius: 20px;
     padding: 20px 0px;
     width: 700px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     box-shadow: 0px 0px 10px #000000;
     h1 {
          padding: 20px;
     }
     .voltar {

          a {
               font-weight: bold;
               text-decoration: none;
               color: #2c51ce;
               transition: 0.3s;
               font-size: 1.3rem;
          }
          a:hover {
               text-decoration: underline;
          }
     }
     .editar {
          a {
               font-weight: bold;
               text-decoration: none;
               color: #2c51ce;
               transition: 0.3s;
               font-size: 1.3rem;
          }
          a:hover {
               text-decoration: underline;
          }
     }
`;

export const Nome = styled.div`
     text-align: center;
     h1 {
          padding: 0px;
     }
`;
export const Foto = styled.div`
     color: #000000;
     margin: 0px 0px 20px 0px;
     img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
     }
`;

export const Dados = styled.div`
     margin-top: 20px;
     margin-bottom: 20px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     gap: 10px;
     padding: 20px;
     background-color: #0000ff1c;
     border: 1px solid #000;

     border-radius: 20px;
`;

export const Informativo = styled.div`
     display: flex;
     flex-direction: row;

     gap: 10px;
     h3 {
          align-items: start;
     }
     span {
          font-size: 1.3rem;
          align-items: center;
     }
`;
export const Title = styled.div`
     width: 90%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
`;
