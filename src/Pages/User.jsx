import React, {useEffect, useState} from "react";
import PageHeaderHome from "../layout/Home/PageHeaderHome";
import Register from "../layout/User/Register";
import FooterHome from "../layout/Home/FooterHome";
import classes from '../Styles/User.module.scss';
import { Routes, Route, Link } from "react-router-dom";
import api from '../services/api'


function User() {

  const [users, setUsers] = useState([])

useEffect (() => {

  getUsers();

}, [])

async function getUsers(){

const response = await api.get ('/users')
setUsers(response.data);
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
              
                <button><i className='bx bx-x'></i></button>
              
            </div>

          ))}
        </div>
      </div>
      <FooterHome />


    </div>


  );
}

export default User;