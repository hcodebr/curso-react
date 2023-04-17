import { useState } from "react";

type FraseProps = {
  name: string;
  company?: string;
  children?: React.ReactNode;
}

function Frase(props: FraseProps) {
  const [welcome, setWelcome]= useState('Olá Visitante');

  function handleWelcome() {
    setWelcome(`Olá ${props.name}, da empresa ${props.company}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{welcome}</h1>
        <button onClick={handleWelcome}>Clique aqui para mudar a frase</button>
        {props.children}
      </header>
    </div>
  );
}
export default Frase;

