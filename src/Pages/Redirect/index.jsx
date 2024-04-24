import React from "react";
import { Container, Title } from "./syled";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";

export const Redirect = () => {
     const [time, setTime] = useState(2);
     const timeOut = useRef(0);

     const navigate = useNavigate();

     useEffect(() => {
          clearTimeout(timeOut.current);

          timeOut.current = setTimeout(() => {
               setTime((t) => t - 1);
          }, 1000);

          if (time <= 0) {
               navigate("/login");
               window.location.reload();
          }

          return () => {
               clearTimeout(timeOut.current);
          };
     }, [navigate, time]);

     return (
          <Container>
               <Title>Você não está logado ! Será redirecionado em: {time}</Title>
          </Container>
     );
};
