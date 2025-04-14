import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import User from './components/user';

function App() {
  return (
    <div className="App">
  
      <Counter />
      <User/>
    </div>
  );
}

export default App;
