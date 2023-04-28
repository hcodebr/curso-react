import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function User() {

 
  return (
    <div >
      <header>
        <h1>Página de Usuários</h1>
        <Link to="profile">Perfil do usuário</Link>
      </header>
    </div>
  );
}

export default User;
