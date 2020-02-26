import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Results from '../Results/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Results/>
      </header>
    </div>
  );
}

export default App;
