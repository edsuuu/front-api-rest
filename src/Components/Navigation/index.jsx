import React from "react";
import { Navbar, Lista } from "./styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);

  const rotas = [
    { name: "Home", to: "/" },

    { name: "Login", to: "/login" },

    { name: "Sair", to: "/alunos" },

    { name: "logado", to: "/logado" },
  ];
  return (
    <Navbar>
      <Lista>
        {rotas.map((rota, index) => (
          <li key={index}>
            <Link to={rota.to}>{rota.name}</Link>
          </li>
        ))}
      </Lista>
      {botaoClicado ? "Botão clicado" : "Botão não clicado"}
    </Navbar>
  );
};

export default Navigation;
