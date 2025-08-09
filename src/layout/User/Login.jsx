import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import classes from '../../Styles/Login.module.scss';
import PageHeaderHome from '../Home/PageHeaderHome';
import FooterHome from "../../layout/Home/FooterHome";
import dashboard from '../User/Dashboard';
import api from '../../services/api';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET não configurado no .env');
  }
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const response = await api.post('/userlogin', credentials);
    
    if (response.data.token && response.data.user) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } else {
      throw new Error('Resposta de login inválida');
    }
  } catch (error) {
    let errorMessage = 'Erro ao fazer login. Tente novamente.';
    
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = 'Email ou senha incorretos';
      } else if (error.response.status === 500) {
        errorMessage = 'Problema no servidor. Tente mais tarde.';
      }
    }
    
    setError(errorMessage);
    console.error('Login error:', error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <PageHeaderHome />
      
      <div className={classes.pageWrapper}>
        <div className={classes.UserConteiner}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.titulo}>
              <h1>Login</h1>
            </div>
            
            {error && (
              <div className={classes.errorMsg}>
                {error}
              </div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleInputChange}
              disabled={loading}
              required
            />
           
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={credentials.password}
              onChange={handleInputChange}
              disabled={loading}
              required
              minLength="6"
            />
              

<div className={classes.btnContainer}>
  <button 
    type="submit" 
    className={classes.LoginBtn} 
    disabled={loading}
  >
    {loading ? 'Carregando...' : 'Login'}
  </button>

  <div className={classes.secondaryButtons}>
    <button 
      type="button" 
      className={classes.BtnOther}
      onClick={() => navigate('/register')} 
      disabled={loading}
    >
      Criar Nova Conta
    </button>
    
    <button 
      type="button" 
      className={classes.BtnOther}
      onClick={() => navigate('/forget-password')} 
      disabled={loading}
    >
      Esqueci a Senha
    </button>
  </div>
</div>

            
          </form>
        </div>
      </div>
      
      <FooterHome />
    </>
  );
}

export default Login;