import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
     background-color: #afafaf;
     width: 800px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin: 110px auto 10px auto;
     border-radius: 10px;
`;
export const Title = styled.div`
     width: 100%;
     border: 1px solid #000000;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
`;

export const AlunoContainer = styled.div`
     margin-top: 20px;
     font-size: 20px;
     gap: 30px;
     width: 100%;
     div {
          margin: 10px 30px;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          & span {
               margin-left: 20px;
          }
     }
`;

export const Profile = styled.div`
     padding: 10px 0px;
     img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
     }
`;

export const NovoAluno = styled(Link)`
     background-color: #00b4d8;
`;
