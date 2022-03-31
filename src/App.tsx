import React from 'react';
import './App.css';
import Grilla from "./componentes/Grilla";
import Historial from "./componentes/Historial";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'} }>
          <Grilla />
          <Historial />
        </div>
      </header>
    </div>
  );
}

export default App;
