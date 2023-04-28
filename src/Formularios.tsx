import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import  FormRegister  from './components/Form/FormRegister';
import { FormLogin } from './components/Form/FormLogin/FormLogin';

function Formularios() {
  const [typeForm, setTypeForm] = useState('login');
  return (
    <div >
      <header>
        <h1>Formulários</h1>
        {typeForm === 'register' && (
          <FormRegister/>
        )}
        {typeForm === 'login' && (
          <FormLogin/>
        )}
      </header>
    </div>
  );
}

export default Formularios;
