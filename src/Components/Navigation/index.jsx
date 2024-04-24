import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Nav, Lista, Icon } from "./styled";
import { Link } from "react-router-dom";
import * as actions from "../../store/modules/auth/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navigation = () => {
     const { user, isLoggedIn } = useSelector((state) => state.auth);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const handleLogout = (e) => {
          e.preventDefault();
          dispatch(actions.loginFailure());
          navigate("/");
          toast.success("Logout efetuado com sucesso!");
     };

     const rotas = [
          { name: "Home", to: "/", icon: <FaHome /> },
          {
               name: "Login",
               to: "/login",
               icon: <FaUserAlt />,
               hidden: isLoggedIn,
          },
          { name: "Registre-se", to: "/register", hidden: isLoggedIn },
          { name: "Aluno", to: "/aluno", hidden: !isLoggedIn },
          { name: "Alunos", to: "/alunos", hidden: !isLoggedIn },

     ];

     return (
          <Nav>
               <div>{isLoggedIn && <h1>Bem vindo, {user.nome}</h1>}</div>
               <Lista>
                    {rotas.map(
                         (rota, index) =>
                              // renderiza apenas a rota se não estiver marcada como oculta
                              !rota.hidden && (
                                   <li key={index}>
                                        <Link to={rota.to}>
                                             {rota.name}
                                             {rota.icon && (
                                                  <Icon>{rota.icon}</Icon>
                                             )}
                                        </Link>
                                   </li>
                              )
                    )}
               </Lista>

               <div>
                    {isLoggedIn && (
                         <Link onClick={handleLogout}>
                              <FaSignInAlt />
                              Sair
                         </Link>
                    )}
               </div>
          </Nav>
     );
};

export default Navigation;
