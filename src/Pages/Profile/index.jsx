import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Form } from "./styled";
import { toast } from "react-toastify";
import { isEmail } from "validator";
import Loading from "../../Components/Loading";
import * as actions from "../../store/modules/auth/actions";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
     const id = useSelector((state) => state.auth.user.id);
     const nomeStorage = useSelector((state) => state.auth.user.nome);
     const emailStorage = useSelector((state) => state.auth.user.email);
     const isLoading = useSelector((state) => state.auth.isLoading);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const [nome, setNome] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     useEffect(() => {
          if (!id) {
               dispatch(actions.loginFailure())
               navigate("/login");
               return toast.error("Você não está logado");
          }



          if (nomeStorage && emailStorage) {
               setNome(nomeStorage);
               setEmail(emailStorage);
          }
     }, [id, emailStorage, nomeStorage, navigate, dispatch]);

     function handleSubmit(e) {
          e.preventDefault();

          let formErrors = false;

          if (nome.length < 3 || nome.length > 255) {
               formErrors = true;
               toast.error("Nome precisa ter entre 3 e 255 caracteres ");
          }

          if (!isEmail(email)) {
               formErrors = true;
               toast.error("Email inválido");
          }


          if (!id && (password.length < 6 || password.length > 50)) {
               formErrors = true;
               toast.error("A senha precisa ter entre 6 a 50 caracteres");
          }

          if (formErrors) return;

          dispatch(actions.updateRequest({ nome, email, password, id }));


     }

     return (
          <Container>
               <Loading isLoading={isLoading}/>
               <h1>Seu Perfil</h1>

               <Form onSubmit={handleSubmit}>
                    <h1>Edite sua conta</h1>
                    <label htmlFor="nome">
                         Digite seu Nome {}
                         <input
                              type="text"
                              value={nome}
                              onChange={(e) => setNome(e.target.value)}
                              placeholder="Digite seu Nome"
                         />
                    </label>
                    <label htmlFor="email">
                         Digite seu E-mail
                         <input
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Digite seu Email"
                         />
                    </label>

                    <label htmlFor="password">
                         Digite sua Senha
                         <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Digite sua Senha"
                         />
                    </label>

                    <Button type="submit">Editar minha conta</Button>
               </Form>
          </Container>
     );
}
