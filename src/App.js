import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const[solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('  http://localhost:3001/solutions')
        .then(res =>res.json())
        .then(json => {
        // random int between 0 & ...
            const randomSolution = json[Math.floor(Math.random()*json.length)]
            setSolution(randomSolution.word)
        })
  }, [setSolution])

  return (
    <div className="App">
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Master Jah. Edit <code>src/App.js</code> and save to reload.
        </p>
                <div>
                    <h1>Wordle (Lingo)</h1>
                    {solution && <div>Solution is: {solution}</div>} {/* if both values are true, it prints out the string*/}
                </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
