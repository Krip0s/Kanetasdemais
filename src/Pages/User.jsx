import React, { useEffect, useState, useRef } from "react";
import PageHeaderHome from "../layout/Home/PageHeaderHome";
import Register from "../layout/User/Register";
import FooterHome from "../layout/Home/FooterHome";
import classes from '../Styles/User.module.scss';
import { Routes, Route, Link } from "react-router-dom";
import api from '../services/api'
import axios from 'axios'


function User() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    getUsers();

  }, []);

  async function getUsers() {

    const response = await api.get('/users')
    setUsers(response.data);
  }

async function deleteUsers(id) {
  if (!window.confirm('Deseja realmente deletar este usuário?')) return;
  
  try {
    await api.delete(`/users/${id}`)  
    getUsers();
    alert("Usuário deletado com sucesso");
  } catch (error) {
    console.error('Error deleting user:', error);
    alert("Erro ao deletar usuário");
  }
} 

  return (
    <div className={classes.pageWrapper}>

      <PageHeaderHome />

      <div className={classes.UserContainer}>
        <h1>Não tem conta? Se registre agora!</h1>
        <div className={classes.UserActions}>
          <button>

            <Link to="/Login">Login</Link>
          </button>

          <button>

            <Link to="/Register">Se Registrar</Link>
          </button>
        </div>

        <div className={classes.cardsContainer}>
          {users.map(user => (

            <div key={user.id} className={classes.card}>
              <div>
                <p>Nome: <span>{user.name}</span></p>
                <p>email: <span>{user.email}</span></p>
                <p>Idade: <span>{user.age}</span></p>
                <p>Senha: <span>{user.password}</span></p>
              </div>

              <button onClick={() => deleteUsers(user.id)}>
                <i className='bx bx-x'></i>
              </button>

            </div>

          ))}
        </div>
      </div>
      <FooterHome />


    </div>


  );
}

export default User;