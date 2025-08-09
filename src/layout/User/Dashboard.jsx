import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../../Styles/Dashboard.module.scss';
import PageHeaderHome from '../Home/PageHeaderHome';
import FooterHome from "../../layout/Home/FooterHome";
import api from '../../services/api';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        const response = await api.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUserData(response.data);
        setFormData({
          name: response.data.name || '',
          email: response.data.email || '',
          phone: response.data.phone || '',
          address: response.data.address || ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Erro ao carregar dados do usuário');
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      const response = await api.put('/user', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUserData(response.data);
      setSuccess('Dados atualizados com sucesso!');
      setEditMode(false);
    } catch (error) {
      console.error('Error updating user data:', error);
      setError('Erro ao atualizar dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading && !userData) {
    return <div className={classes.loading}>Carregando...</div>;
  }

  return (
    <>
      <PageHeaderHome />
      
      <div className={classes.dashboardContainer}>
        <div className={classes.userProfile}>
          <h1>Meu Perfil</h1>
          
          {error && <div className={classes.errorMsg}>{error}</div>}
          {success && <div className={classes.successMsg}>{success}</div>}

          {!editMode ? (
            <div className={classes.profileInfo}>
              <p><strong>Nome:</strong> {userData?.name}</p>
              <p><strong>Email:</strong> {userData?.email}</p>
              <p><strong>Telefone:</strong> {userData?.phone || 'Não informado'}</p>
              <p><strong>Endereço:</strong> {userData?.address || 'Não informado'}</p>
              
              <div className={classes.buttonGroup}>
                <button 
                  onClick={() => setEditMode(true)}
                  className={classes.editButton}
                >
                  Editar Perfil
                </button>
                <button 
                  onClick={handleLogout}
                  className={classes.logoutButton}
                >
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={classes.editForm}>
              <div className={classes.formGroup}>
                <label>Nome:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className={classes.formGroup}>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled
                />
              </div>
              
              <div className={classes.formGroup}>
                <label>Telefone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className={classes.formGroup}>
                <label>Endereço:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className={classes.formActions}>
                <button 
                  type="button" 
                  onClick={() => setEditMode(false)}
                  className={classes.cancelButton}
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  disabled={loading}
                  className={classes.saveButton}
                >
                  {loading ? 'Salvando...' : 'Salvar Alterações'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      <FooterHome />
    </>
  );
}

export default Dashboard;