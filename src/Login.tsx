import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin(){
    navigate('/profile');
  }
  return (
    <div >
      <header className="App-header">
        <h1>Login</h1>
        <button onClick={handleLogin}>Login</button>
      </header>
    </div>
  );
}

export default Login;
