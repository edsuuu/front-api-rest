import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { AlunoContainer, Botoes, Container, Profile, Title } from "./syled";
import { Link } from "react-router-dom";
import { get } from "lodash";
import {
     FaUserCircle,
     FaEdit,
     FaWindowClose,
     FaExclamation,
} from "react-icons/fa";
import axios from "../../services/axios";
import * as actions from "../../store/modules/auth/actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "../../Components/Loading";

export default function Alunos() {
     const [alunos, setAlunos] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     useEffect(() => {
          async function getAlunos() {
               try {
                    setIsLoading(true);
                    const response = await axios.get("/alunos");
                    setAlunos(response.data);
                    setIsLoading(false);
               } catch (e) {
                    const status = get(e, "response.status", 0);

                    if (status === 401) {
                         toast.error("Você precisa fazer login");
                    }

                    dispatch(actions.loginFailure());
                    navigate("/");

                    setIsLoading(false);
               }
          }

          getAlunos();
     }, [dispatch, navigate]);

     const handleDeleteAsk = (e) => {
          e.preventDefault();
          const exclamation = e.currentTarget.nextSibling;

          exclamation.setAttribute("display", "block");
          e.currentTarget.remove();
     };

     const handleDelete = async (e, id, index) => {
          try {
               setIsLoading(true);

               await axios.delete(`/alunos/${id}`);
               const novosAlunos = [...alunos];
               novosAlunos.splice(index, 1);
               setAlunos(novosAlunos);

               toast.success("Aluno(a) deletado(a) com sucesso");

               setIsLoading(false);
          } catch (err) {
               setIsLoading(false);
               const status = get(err, "response.status", 0);

               if (status === 401) {
                    toast.error("Você precisa fazer login");
               }

               if (status === 400) {
                    const errors = get(err, "response.data.errors", []);
                    errors.map((error) => toast.error(error));
                    return;
               }

               const errors = get(
                    err,
                    "response.data.error",
                    "Erro desconhecido",
                    []
               );
               errors.map((error) => toast.error(error));
          }
     };
     return (
          <Container>
               <Loading isLoading={isLoading} />
               <Title>
                    <h1>Alunos</h1>
                    <Link to={`/aluno`}>
                         <FaEdit /> Criar novo aluno
                    </Link>
               </Title>

               <AlunoContainer>
                    {alunos.map((aluno, index) => (
                         <Profile id={aluno.id} key={String(aluno.id)}>
                              {get(aluno, "Fotos[0].url", false) ? (
                                   <img
                                        src={aluno.Fotos[0].url}
                                        alt="img"
                                        crossOrigin="anonymous"
                                   />
                              ) : (
                                   <FaUserCircle size={50} cursor="normal" />
                              )}
                              <div>
                                   <h4>Nome:</h4>
                                   <span>{aluno.nome}</span>
                              </div>

                              <div>
                                   <h4>E-mail: </h4>
                                   <span>{aluno.email}</span>
                              </div>

                              <Botoes>
                                   <Link
                                        className="perfil"
                                        to={`/alunos/${aluno.id}`}
                                   >
                                        Perfil
                                   </Link>
                                   <Link
                                        className="editar"
                                        to={`/aluno/${aluno.id}/edit`}
                                   >
                                        <FaEdit size={30} />
                                   </Link>

                                   <Link
                                        className="deletar"
                                        onClick={handleDeleteAsk}
                                        to={`/aluno/${aluno.id}/delete`}
                                   >
                                        <FaWindowClose size={30} />
                                   </Link>

                                   <FaExclamation
                                        onClick={(e) =>
                                             handleDelete(e, aluno.id, index)
                                        }
                                        size={30}
                                        display="none"
                                        cursor="pointer"
                                        className="deletarWarn"
                                   />
                              </Botoes>
                         </Profile>
                    ))}
               </AlunoContainer>
          </Container>
     );
}
