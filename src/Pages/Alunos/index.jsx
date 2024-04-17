import React, { useEffect, useState } from "react";
import { AlunoContainer, Container, Profile, Title } from "./syled";
import { Link } from "react-router-dom";
import { get } from "lodash";
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";

import axios from "../../services/axios";

import Loading from "../../Components/Loading";

export default function Alunos() {

     const [alunos, setAlunos] = useState([]);
     const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
          async function getAlunos() {
               try {
                    setIsLoading(true);
                    const response = await axios.get("/alunos");
                    setAlunos(response.data);
                    setIsLoading(false);
               } catch (e) {
                    console.log(e);
               }
          }

          getAlunos();
     }, []);

     return (
          <Container>
               <Loading isLoading={isLoading}/>

               <Title>Alunos</Title>
               <AlunoContainer>
                    {alunos.map((aluno) => (
                         <Profile key={String(aluno.id)}>
                              {get(aluno, "Fotos[0].url", false) ? (
                                   <img
                                        src={aluno.Fotos[0].url}
                                        alt="img"
                                        crossOrigin="anonymous"
                                   />
                              ) : (
                                   <FaUserCircle size={50} />
                              )}
                              <span>{aluno.nome}</span>
                              <span>{aluno.email}</span>

                              <Link to={`/aluno/${aluno.id}/edit`}>
                                   <FaEdit size={30} />
                              </Link>
                              <Link to={`/aluno/${aluno.id}/delete`}>
                                   <FaWindowClose size={30} />
                              </Link>
                         </Profile>
                    ))}
               </AlunoContainer>
          </Container>
     );
}
