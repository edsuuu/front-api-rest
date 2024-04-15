import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/HomePage";
import Login from "../Pages/Login";
import Logado from "../Pages/Logado";
import Pagina404 from "../Pages/NotFoundPage";

import PrivateRoute from "./PrivateRoute";

export function AppRoutes() {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />

               <Route
                    path="/logado"
                    element={
                         <PrivateRoute>
                              <Logado />
                         </PrivateRoute>
                    }
               />

               <Route path="*" element={<Pagina404 />} />
          </Routes>
     );
}

export default AppRoutes;
