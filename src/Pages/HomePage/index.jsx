// import { useNavigate } from "react-router-dom";
import React  from 'react';

import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux';

import * as exampleActions from '../../store/modules/example/actions';

export default function Home() {
  // const navigate = useNavigate();

  const notify = () => toast.success("Wow so easy !");

  const disparador = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    disparador(exampleActions.clicaBotaoRequest());

  }

  return (
    <div>
      <h1>Pagina Home</h1>
      <button onClick={notify}>Notify !</button>
      <br />
      <br />
      {/* <button onClick={() => { navigate('/logado')}}> Ir para logado </button> */}

      <button onClick={handleClick}> BOTAO </button>
    </div>
  );
}
