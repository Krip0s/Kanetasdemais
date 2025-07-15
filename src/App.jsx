import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHeaderHome from "./layout/Home/PageHeaderHome";
import FooterHome from "./layout/Home/FooterHome";
import Home from "./Pages/Home"; 
import Products from "./Pages/products";
import Cart from "./Pages/cart";
import Login from "./Pages/Login";

function App() {

  

  return (
    <div className="app">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;