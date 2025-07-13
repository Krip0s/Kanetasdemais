import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHeaderHome from "./layout/Home/PageHeaderHome";
import FooterHome from "./layout/Home/FooterHome";
import Home from "./Pages/Home"; 
import Produtos from "./Pages/Produtos";
import Carrinho from "./Pages/Carrinho";
import Login from "./Pages/Login";

function App() {

  

  return (
    <div className="app">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;