// import { useNavigate } from "react-router-dom";
import React from "react";

import { toast } from "react-toastify";
import { Container } from "./styled";

export default function Home() {
     // const navigate = useNavigate();

     const notify = () => toast.success("Wow so easy !");

     return (
          <Container>
               <h1>Sistema da Escola </h1>
               <button onClick={notify}>Notify !</button>
          </Container>
     );
}
