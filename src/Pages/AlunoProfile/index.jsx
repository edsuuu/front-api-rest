import React, { useEffect, useState } from "react";
import { Container, Dados, Foto, Informativo, Nome, Perfil, Title } from "./styled";
import { useParams, Link } from "react-router-dom";
import axios from "../../services/axios";
import { toast } from "react-toastify";
import { get } from "lodash";
import { FaUserCircle } from "react-icons/fa";

export default function AlunoProfile() {
     const { id } = useParams();
     const [alunos, setAlunos] = useState([]);
     const [foto, setFoto] = useState("");
     useEffect(() => {
          if (!id) return;

          async function getAluno() {
               try {
                    const { data } = await axios.get(`/alunos/${id}`);
                    const Foto = get(data, "Fotos[0].url", "");

                    setFoto(Foto);
                    setAlunos(data);
               } catch (err) {
                    toast.error("Aluno não encontrado");
                    toast.error(
                         "Não foi possivel obter dados do Perfil do aluno"
                    );
               }
          }
          getAluno();
     }, [id]);
     return (
          <Container>
               <Perfil>
                    <Title>
                         <div className="voltar">
                              <Link to="/alunos"> Voltar </Link>
                         </div>
                         <div>
                              <h1>Perfil do Aluno</h1>
                         </div>
                         <div className="editar">
                              <Link to={`/aluno/${id}/edit`}>
                                   Editar Aluno
                              </Link>
                         </div>
                    </Title>
                    <Foto>
                         {foto ? (
                              <img
                                   src={foto}
                                   alt={alunos.nome}
                                   crossOrigin="anonymous"
                              />
                         ) : (
                              <FaUserCircle size={200} />
                         )}
                    </Foto>

                    <Dados>
                         <Nome>
                              <h1>Nome: {alunos.nome}</h1>
                         </Nome>
                         <Informativo>
                              <h3>Email do Aluno:</h3>
                              <span>{alunos.email}</span>
                         </Informativo>
                         <Informativo>
                              <h3>Idade do Aluno:</h3>
                              <span>{alunos.idade} Anos</span>
                         </Informativo>
                         <Informativo>
                              <h3>Peso do Aluno:</h3>
                              <span>{alunos.peso} Kg</span>
                         </Informativo>
                         <Informativo>
                              <h3>Altura do Aluno:</h3>
                              <span>{alunos.altura} M</span>
                         </Informativo>
                    </Dados>
               </Perfil>
          </Container>
     );
}
