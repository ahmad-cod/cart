import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter'; 

import './App.css';

const name = "Adewale";
const el = <h2>{name}</h2>
function App() {
  return (
    <div className="App">
      {el},
      <h4>Age: 22</h4>
    </div>
  );
}

export default App;
