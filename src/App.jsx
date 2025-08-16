import React from "react";
import { Routes, Route } from "react-router-dom";
import PageHeaderHome from "./layout/Home/PageHeaderHome";
import FooterHome from "./layout/Home/FooterHome";
import Home from "./Pages/Home"; 
import Products from "./Pages/products";
import Cart from "./Pages/cart";
import User from "./Pages/User";
import Register from'./layout/User/Register';
import Login from './layout/User/Login';
import Dashboard from './layout/User/Dashboard';

function App() {

  

  return (
    <div className="app">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/User" element={<User />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      
    </div>
  );
}

export default App;