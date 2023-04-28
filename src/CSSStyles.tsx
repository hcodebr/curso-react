import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import Externo from './components/CSS/Externo';
import Inline from './components/CSS/Inline';
import Module from './components/CSS/Module';
import StyledComponents from './components/CSS/StyledComponents';
import Tailwind from './components/CSS/Tailwind';
import Emotion from './components/CSS/Emotion';


const Ul = styled.ul`
  width: 300px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  & li {
    line-height: 50px;
    height: 50px;
    padding-left: 10%;
    &:hover {
      background-color: #3f3e43;
      cursor: pointer;
    }
  }
  & a {
    text-decoration: none;
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }
  background-color: #2f2e33;
`

const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
  justify-content: center;
`

function Content(){
  return(
    <Routes>
      <Route index={true} element={<section><h1>Selecione um tipo de estilo</h1></section>}/>
      <Route path="externo" element={<Externo/>}/>
      <Route path="inline" element={<Inline/>}/>
      <Route path="module" element={<Module/>}/>
      <Route path="styled-components" element={<StyledComponents/>}/>
      <Route path="Tailwind" element={<Tailwind/>}/>
      <Route path="Emotion" element={<Emotion/>}/>
      <Route path="Tailwind" element={<Tailwind/>}/>
    </Routes>

  );
}

function CSSStyles() {
  return (
    <div style={{display:'flex'}}>
      <header>
        <h1>Página de Estilos CSS</h1>
        <Ul>
          <li><Link to="externo">Externo</Link></li>
          <li><Link to="inline">Inline</Link></li>
          <li><Link to="module">Módulo</Link></li>
          <li><Link to="styled-components"> Styled Components</Link></li>
          <li><Link to="emotion">Emotion</Link></li>
          <li><Link to="tailwind">Tailwind</Link></li>
        </Ul>
      </header>
      <ContentContainer>
        <Content/>
      </ContentContainer>
    </div>
  );
}

export default CSSStyles;
