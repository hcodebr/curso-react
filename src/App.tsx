import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import CSSStyles from './CSSStyles';
import Condicional from './Condicional';
import Formularios from './Formularios';
import Login from './Login';
import Error from './Error';
import User from './User';
import Profile from './Profile';
import Externo from './components/CSS/Externo';
import Inline from './components/CSS/Inline';
import  Module from './components/CSS/Module';
import StyledComponents from './components/CSS/StyledComponents';
import Tailwind from './components/CSS/Tailwind';
import Emotion from './components/CSS/Emotion';

function Content(){
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(()=>{
    if(location !== displayLocation){
      setTransitionStage('fadeOut');
    }

  },[location, displayLocation]);


  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={()=>{
        setTransitionStage('fadeIn');
        setDisplayLocation(location);
      }}
    >
        <Routes location={displayLocation}>
          <Route path="/" element={<section><h1>Página inicial</h1></section>} errorElement={<Error/>} />
          <Route path="/css" element={<CSSStyles />}>
            <Route path="externo" element={<Externo />} />
            <Route path="inline" element={<Inline/>}/>
            <Route path="module" element={<Module/>}/>
            <Route path="styled-components" element={<StyledComponents/>}/>
            <Route path="emotion" element={<Emotion/>}/>
            <Route path="tailwind" element={<Tailwind/>}/>
          </Route>
          <Route path="/conditional" element={<Condicional />} />
          <Route path="/form" element={<Formularios />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user">
            <Route index={true}  element={<User />} />
            <Route path="profile" element={<Profile/>} />
          </Route>
        </Routes>
    </div>
  )
}



function App() {
  return (
    <BrowserRouter>
    <div >
      <header className="menu-header">
        <nav className="menu-site">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/css">CSS</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/form">Formularios</Link></li>
              <li><Link to="/conditional">Condicionais</Link></li>
              <li><Link to="user">User</Link></li>
            </ul>  
        </nav> 
      </header>
      <Content />
    </div>
    </BrowserRouter>
  );
}

export default App;
