import React from "react";
import { Routes, Route } from "react-router-dom";

import Aluno from "../Pages/Aluno";
import Alunos from "../Pages/Alunos";
import Fotos from "../Pages/Fotos";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { Redirect } from "../Pages/Redirect";

import Pagina404 from "../Pages/NotFoundPage";

// import Logado from "../Pages/Logado";
import PrivateRoute from "./PrivateRoute";

export function AppRoutes() {
     return (
          <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/redirect" element={<Redirect />} />

               <Route
                    path="/aluno"
                    element={
                         <PrivateRoute>
                              <Aluno />
                         </PrivateRoute>
                    }
               />
               <Route
                    path="/aluno/:id/edit"
                    element={
                         <PrivateRoute>
                              <Aluno />
                         </PrivateRoute>
                    }
               />
               <Route
                    path="/alunos"
                    element={
                         <PrivateRoute>
                              <Alunos />
                         </PrivateRoute>
                    }
               />
               <Route
                    path="/fotos"
                    element={
                         <PrivateRoute>
                              <Fotos />
                         </PrivateRoute>
                    }
               />
               <Route
                    path="/fotos:id"
                    element={
                         <PrivateRoute>
                              <Fotos />
                         </PrivateRoute>
                    }
               />

               <Route path="*" element={<Pagina404 />} />
               {/*

               rota privada


               <Route
                    path="/logado"
                    element={
                         <PrivateRoute>
                              <Logado />
                         </PrivateRoute>
                    }
               /> */}
          </Routes>
     );
}

export default AppRoutes;
