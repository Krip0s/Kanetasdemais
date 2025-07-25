import React, { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import classes from '../../Styles/Register.module.scss';
import PageHeaderHome from '../Home/PageHeaderHome';
import FooterHome from "../../layout/Home/FooterHome";
import api from '../../services/api'

function Register() {

  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const navigate = useNavigate()

  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()
  const inputPassword = useRef()
  const inputConfirmPassword = useRef()

  const validateFormLocally = (formData) => {

    if (formData.password !== formData.confirmPassword) {
      return 'As senhas não coincidem'
    }
    return null
  }

  const clearForm = () => {
    inputName.current.value = ''
    inputEmail.current.value = ''
    inputAge.current.value = ''
    inputPassword.current.value = ''
    inputConfirmPassword.current.value = ''
  }

  const collectFormData = () => {
    return {
      name: inputName.current.value.trim(),
      email: inputEmail.current.value.trim(),
      age: inputAge.current.value,
      password: inputPassword.current.value,
      confirmPassword: inputConfirmPassword.current.value
    }
  }

  const handleApiError = (error) => {
    console.error('erro ao cadastrar:', error)

    if (error.response && error.response.data && error.response.data.error) {
      return error.response.data.error
    } else if (error.request) {
      return 'Erro de Conexão'
    }
    else {
      return 'erro inexperado'
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setSuccess('')
    setLoading(true)

    try {
  
      const formData = collectFormData()

    
      const localError = validateFormLocally(formData)
      if (localError) {
        setError(localError)
        setLoading(false)
        return
      }

      
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: formData.age ? parseInt(formData.age) : undefined
      }


      const response = await api.post('/users', userData)

      
      setSuccess('Usuário cadastrado com sucesso!')
      clearForm()
      setTimeout(() => navigate('/user'), 2000)

    } catch (error) {
      
      const errorMessage = handleApiError(error)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  

  async function createUsers() {


    console.log(inputName)
    console.log(inputEmail)
    console.log(inputAge)
  }

  return (
    <>
      <PageHeaderHome />

      <div className={classes.pageWrapper}>
        <div className={classes.UserConteiner}>

          <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.titulo}>
              <h1>Registro</h1>
            </div>

            {error && (
              <div style={{
                color: '#ff0000',
                backgroundColor: '#ffe6e6',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '15px',
                border: '1px solid #ff9999'
              }}>
                {error}
              </div>
            )}

            {success && (
              <div style={{
                color: '#008000',
                backgroundColor: '#e6ffe6',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '15px',
                border: '1px solid #99ff99'
              }}>
                {success}
              </div>
            )}

            <input type="text" name='name' placeholder='Nome Completo' ref={inputName} disabled={loading} />
            <input type="email" name='email' placeholder='Email' ref={inputEmail} disabled={loading} />
            <input type="number" name='age' placeholder='Idade' ref={inputAge} disabled={loading} />
            <input type="password" name='password' placeholder='Senha' ref={inputPassword} disabled={loading} />
            <input type="password" name='confirmPassword' placeholder='Confirme Sua Senha' ref={inputConfirmPassword} disabled={loading} />

            <div className={classes.btn}>
              <button type="submit" className={classes.registerBtn} disabled={loading}>{loading ? 'Cadastrando...' : 'Registrar'}

              </button>
              <button type="button" className={classes.cancelBtn} onClick={() => navigate('/user')} disabled={loading}>Cancelar</button>
            </div>


          </form>

        </div>
      </div>
      <FooterHome />


    </>

  );
}

export default Register; 