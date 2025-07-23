import React, { useState } from 'react'
import classes from '../../Styles/Register.module.scss';
import PageHeaderHome from '../Home/PageHeaderHome';
import FooterHome from "../../layout/Home/FooterHome";

function Register() {


  return (
    <>
      <PageHeaderHome />

      <div className={classes.pageWrapper}>
        <div className={classes.UserConteiner}>

          <form className={classes.form}>
            <div className={classes.titulo}>
              <h1>Registro</h1>
            </div>
            
              <input type="text" name='name' placeholder='Nome Completo' />
              <input type="email" name='email' placeholder='Email' />
              <input type="number" name='age' placeholder='Idade' />
              <input type="password" name='password' placeholder='Senha' />
              <input type="password" name='confirmPassword' placeholder='Confirme Sua Senha' />
            
            <div className={classes.btn}>
              <button type="submit" className={classes.registerBtn}>Registrar</button>
              <button type="submit" className={classes.cancelBtn}>Cancelar</button>
            </div>


          </form>

        </div>
      </div>
      <FooterHome />


    </>

  );
}

export default Register; 