/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import axios from "../../services/axios";
import React, { useState, useEffect } from "react";
import { Container, Title, ProfilePicture } from "./styled";
import { get } from "lodash";
import { useParams } from "react-router-dom";
import { Form, Button } from "./styled";
import { isEmail, isInt, isFloat } from "validator";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/actions";
import { FaEdit, FaUserCircle } from "react-icons/fa";

export default function Aluno() {
     const { id } = useParams();
     const [foto, setFoto] = useState("");
     const [nome, setNome] = useState("");
     const [sobrenome, setSobrenome] = useState("");
     const [email, setEmail] = useState("");
     const [idade, setIdade] = useState("");
     const [peso, setPeso] = useState("");
     const [altura, setAltura] = useState("");
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          if (!id) return;

          async function getAluno() {
               try {
                    setIsLoading(true);
                    const { data } = await axios.get(`/alunos/${id}`);

                    const Foto = get(data, "Fotos[0].url", "");
                    setFoto(Foto);
                    setNome(data.nome);
                    setSobrenome(data.sobrenome);
                    setEmail(data.email);
                    setIdade(data.idade);
                    setPeso(data.peso);
                    setAltura(data.altura);

                    setIsLoading(false);
               } catch (err) {
                    setIsLoading(false);

                    const status = get(err, "response.status", 0);
                    const errors = get(err, "response.data.error", []);

                    if (status === 400) {
                         errors.map((error) => toast.error(error));
                         return;
                    }
               }
          }
          getAluno();
     }, [id]);

     async function handleSubmit(e) {
          e.preventDefault();
          let formErros = false;

          if (nome.length < 3 || nome.length > 255) {
               toast.error("Nome precisa ter entre 3 e 255 caracteres ");
               formErros = true;
          }
          if (sobrenome.length < 3 || sobrenome.length > 255) {
               toast.error("Sobrenome precisa ter entre 3 e 255 caracteres ");
               formErros = true;
          }

          if (!isEmail(email)) {
               toast.error("Email inválido");
               formErros = true;
          }
          if (!isInt(String(idade))) {
               toast.error("Idade inválida");
               formErros = true;
          }

          if (!isFloat(String(peso))) {
               toast.error("Peso inválido");
               formErros = true;
          }
          if (!isFloat(String(altura))) {
               toast.error("Altura inválida");
               formErros = true;
          }

          if (formErros) return;

          try {
               if (id) {
                    setIsLoading(true);

                    //editar
                    await axios.put(`/alunos/${id}`, {
                         nome,
                         sobrenome,
                         email,
                         idade,
                         peso,
                         altura,
                    });
                    toast.success("Aluno(a) editado(a) com sucesso");
                    setIsLoading(false);

                    navigate("/alunos");
               } else {
                    setIsLoading(true);

                    await axios.post(`/alunos/`, {
                         nome,
                         sobrenome,
                         email,
                         idade,
                         peso,
                         altura,
                    });

                    navigate("/alunos");
                    toast.success("Aluno(a) criado(a) com sucesso");
                    setIsLoading(false);
               }
          } catch (err) {
               setIsLoading(false);

               const status = get(err, "response.status", 0);
               const errors = get(err, "response.data.errors", []);

               if (errors) {
                    errors.map((error) => toast.error(error));
               } else {
                    toast.error("Erro desconhecido");
               }

               if (status === 401) dispatch(actions.loginFailure());
          }
     }

     return (
          <Container>
               <Loading isLoading={isLoading} />

               <Form onSubmit={handleSubmit}>
                    <Title>{id ? "Editar aluno" : "Novo aluno"}</Title>

                    {id && (
                         <ProfilePicture>
                              {foto ? (
                                   <img src={foto} alt={nome} crossOrigin="anonymous"/>
                              ) : (
                                   <FaUserCircle size={150} />
                              )}
                              <Link to={`/fotos/${id}`}>
                                  Trocar foto <FaEdit size={24}/>
                              </Link>
                         </ProfilePicture>
                    )}

                    <label name="nome">
                         Digite o nome do aluno
                         <input
                              type="text"
                              value={nome}
                              onChange={(e) => setNome(e.target.value)}
                              placeholder="Digite o Nome do aluno"
                         />
                    </label>

                    <label name="sobrenome">
                         Digite o sobrenome do aluno
                         <input
                              type="text"
                              value={sobrenome}
                              onChange={(e) => setSobrenome(e.target.value)}
                              placeholder="Digite o sobrenome do aluno"
                         />
                    </label>

                    <label name="email">
                         Digite o e-mail do aluno
                         <input
                              type="text"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Digite o E-mail do aluno"
                         />
                    </label>

                    <label name="idade">
                         Digite a idade do aluno
                         <input
                              type="text"
                              value={idade}
                              onChange={(e) => setIdade(e.target.value)}
                              placeholder="Digite a idade do aluno"
                         />
                    </label>

                    <label name="peso">
                         Digite o peso do aluno
                         <input
                              type="text"
                              value={peso}
                              onChange={(e) => setPeso(e.target.value)}
                              placeholder="Digite o peso do aluno"
                         />
                    </label>

                    <label name="altura">
                         Digite o altura do aluno
                         <input
                              type="text"
                              value={altura}
                              onChange={(e) => setAltura(e.target.value)}
                              placeholder="Digite o altura do aluno"
                         />
                    </label>

                    <Button type="submit">
                         {id ? "Editar aluno" : "Criar novo aluno"}
                    </Button>
               </Form>
          </Container>
     );
}
