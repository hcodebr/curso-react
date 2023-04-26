import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CSSStyles from './CSSStyles';

function Content() {
    return (
    <div>
      <Routes>
        <Route path="/" element={<section>Home</section>} />
        <Route path="/css" element={<CSSStyles/>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
    <div >
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/css">CSS</Link>
        </nav>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Content/>
    </div>
    </BrowserRouter>
  );
}

export default App;
