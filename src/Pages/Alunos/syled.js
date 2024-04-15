import styled from 'styled-components';

export const Container = styled.div`
     background-color: white;
     width: 600px;
     display: flex;
     flex-direction: column;
     justify-content:center;
     align-items: center;
     margin: 10px auto 10px auto;
     border-radius: 10px;
     `;
export const Title = styled.h1`
     margin-top: 20px;

     `;

export const AlunoContainer = styled.div`
     margin-top: 20px;
     font-size: 20px;
     gap: 30px;
     width: 100%;
     div{
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
     img{
          width: 50px;
          height: 50px;
          border-radius: 50%;
     }
     `;
