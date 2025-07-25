import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import classes from '../../Styles/Login.module.scss';
import PageHeaderHome from '../Home/PageHeaderHome';
import FooterHome from "../../layout/Home/FooterHome";

function Login() {

  return (
     <>
     <PageHeaderHome />
      

      <div className={classes.pageWrapper}>
        <div className={classes.UserConteiner}>

          <form className={classes.form}>
            <div className={classes.titulo}>
              <h1>Login</h1>
            </div>
            
              <input type="email" name='email' placeholder='Email' />
           
              <input type="password" name='password' placeholder='Senha' />
              
            <div className={classes.btn}>
              <button type="button" className={classes.loginBtn}>Entrar na Conta</button>
     
            </div>


          </form>

        </div>
      </div>
      <FooterHome />


    </>
    
  )
}

export default Login
