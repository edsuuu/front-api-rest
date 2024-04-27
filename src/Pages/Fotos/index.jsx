import React, { useEffect, useState } from "react";
import { Container, Title, Form } from "./syled";
import Loading from "../../Components/Loading";
import axios from "../../services/axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { get} from "lodash";
import { useDispatch } from "react-redux";
import * as actions from "../../store/modules/auth/actions";

export default function Fotos() {
     const { id } = useParams();
     const navigate = useNavigate();
     const [isLoading, setIsLoading] = useState(false);
     const [foto, setFoto] = useState("");
     const dispatch = useDispatch();

     useEffect(() => {
          const getData = async () => {
               try {
                    setIsLoading(true);
                    const { data } = await axios.get(`/alunos/${id}`);

                    setFoto(get(data, "Fotos[0].url", ""));

                    setIsLoading(false);
               } catch (err) {
                    toast.error("Erro ao obter imagem");
                    navigate("/");
               }
          };

          getData();
     }, [id, navigate]);

     const handleChange = async (e) => {
          const foto = e.target.files[0];

          const fotoURL = URL.createObjectURL(foto);
          setFoto(fotoURL);

          const formData = new FormData();
          formData.append("aluno_id", id);
          formData.append("foto", foto);

          try {
               setIsLoading(true);

               await axios.post("/fotos", formData, {
                    headers: {
                         "Content-Type": "multipart/form-data",
                    },
               });

               toast.success("Foto enviada com sucesso");
               navigate(`/alunos/`);
               setIsLoading(false);
          } catch (err) {
               const { status } = get(err, "response", {});
               toast.error("Erro ao enviar foto");
               setIsLoading(false);
               if (status === 400) dispatch(actions.loginFailure())
          }
     };

     return (
          <Container>
               <Loading isLoading={isLoading} />

               <Title>Atualizar Foto do aluno</Title>

               <Form>
                    <label htmlFor="foto">
                         {foto ? (
                              <img
                                   src={foto}
                                   alt="Foto"
                                   crossOrigin="anonymous"
                              />
                         ) : (
                              "Selecionar uma foto"
                         )}
                         <input type="file" id="foto" onChange={handleChange} />
                    </label>
               </Form>
          </Container>
     );
}
