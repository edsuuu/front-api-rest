
import React from "react";
import EscolaImagem from "./img/escola.webp";
import { Container, Imagem, Titulo   } from "./styled";

export default function Home() {


     return (
          <Container>

               <Titulo>
                    <h1>Bem-vindo(a) <br/>Em Nosso Sistema escolar</h1>

                    <p>Explore nosso painel de gestão, onde você pode acompanhar o progresso dos alunos, gerenciar informações acadêmicas e promover uma experiência educacional envolvente e eficaz.</p>

               </Titulo>

               <Imagem>
                    <img src={EscolaImagem} alt="" />
               </Imagem>
          </Container>
     );
}
