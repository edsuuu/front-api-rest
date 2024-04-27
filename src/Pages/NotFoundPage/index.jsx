import { Container, Conteudo } from "./styled";
import NotFoud from "./img/notfound.webp"

export default function NotFoundPage() {
     return (
          <Container>
               <Conteudo >
               <img src={NotFoud} alt="" />
               <h1>Pagina Nao existe ERROR 404 </h1>

               </Conteudo>


          </Container>
     );
}
