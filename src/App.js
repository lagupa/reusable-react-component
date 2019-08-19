import React from 'react';
import './App.css';
import MainApp from './components/mainApp'

function App() {
  return (
    <div className="App">
      <div className="continer-fluid pt-3 pb-3 bg-primary">
        <h1 className="container text-white">Useful React Components</h1>
      </div>
      <MainApp />
    </div>
  );
}

export default App;
