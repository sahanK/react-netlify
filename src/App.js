import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [value, setValue] = useState("");

  useEffect(() =>{
    fetch(".netlify/functions/node-fetch")
    .then(result => result.json())
    .then(data => setValue(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value.msg}
        </a>
      </header>
    </div>
  );
}

export default App;
