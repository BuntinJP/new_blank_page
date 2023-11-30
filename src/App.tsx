import React from 'react';
import './App.css';
import clientInfo from './clientInfo.json';
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <p>おはよ。</p>
      <br></br>
      <p>server:{ clientInfo.name }</p>
    </div>
  );
};

export default App;
