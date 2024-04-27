import { Container, Conteudo } from "./styled";
import NotFoud from "./img/notfound.webp"

export default function NotFoundPage() {
     return (
          <Container>
               <Conteudo >
               <img src={NotFoud} alt="" />
               <h1>Essa pagína que você tentou acessar não existe. </h1>
               <h1>Error 404</h1>
               </Conteudo>
          </Container>
     );
}
