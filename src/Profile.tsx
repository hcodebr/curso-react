import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  return (
    <div >
      <header>
        <h1>Perfil do Usuário</h1>
        <button onClick={() => navigate('/')}>Sair</button>
      </header>
    </div>
  );
}

export default Profile;
