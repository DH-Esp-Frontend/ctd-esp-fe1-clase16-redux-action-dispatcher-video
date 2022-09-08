import React from 'react';
import './App.css';
import Grilla from "./componentes/Grilla";
import Historial from "./componentes/Historial";
import {store} from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100%'} }>
              <Grilla />
              <Historial />
            </div>
          </header>
        </div>
      </Provider>
  );
}

export default App;
