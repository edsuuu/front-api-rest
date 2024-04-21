/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Form, Title, Button } from "./syled";
import { isEmail } from "validator";
import { toast } from "react-toastify";
import { get } from "lodash";

import Loading from "../../Components/Loading";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/modules/auth/actions";

export default function Login() {
     const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
     const navigate = useNavigate();

     const location = useLocation();
     const dispatch = useDispatch();

     const prevPath = get(location, "state.PrevPath", "/");

     const isLoading = useSelector((state) => state.auth.isLoading);

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const handleSubmit = (e) => {
          e.preventDefault();
          let formErrors = false;

          if (!isEmail(email)) {
               formErrors = true;
               toast.error("Email inválido");
               return;
          }

          if (password.length < 6 || password.length > 50) {
               formErrors = true;
               toast.error("Senha inválida");
          }

          if (formErrors) return;

          dispatch(actions.loginRequest({ email, password, prevPath }));
     };

     useEffect(() => {
          if (isLoggedIn) {
               navigate("/alunos");
          }
     }, [isLoggedIn, navigate]);

     return (
          <Container>
               <Loading isLoading={isLoading} />
               <Form onSubmit={handleSubmit}>
                    <Title>Pagina Login</Title>
                    <label name="email">
                         Digite seu E-mail
                         <input
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Digite seu Email"
                         />
                    </label>
                    <label name="password">
                         Digite a sua Senha
                         <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Digite a sua Senha"
                         />
                    </label>
                    <Button type="submit">Entrar</Button>
               </Form>
          </Container>
     );
}
