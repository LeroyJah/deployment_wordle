import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"; // here the hooks are imported
import Wordle from "./components/Wordle";

function App() {
  const[solution, setSolution] = useState(null) // here the hook is given an initial value of null (empty)

  useEffect(() => {
    fetch('  http://localhost:3001/solutions')// the json-array has been given api-endpoints and is fetched here
        .then(res => res.json())
        .then(json => {
        // random int between 0 & ...
            const randomSolution = json[Math.floor(Math.random()*json.length)]
            setSolution(randomSolution.word)
        })
  }, [setSolution])

    //all of this is converted to .jsx once send to the browser
    return (
    <div className="App">
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Master Jah. Remember to push 3 commits each day.
        </p>
                <div>
                    <h1>Wordle (Lingo)</h1>
                    {solution && <Wordle solution={solution}/>} {/* if both values are true, it prints out the string*/}
                </div>
                <div>Solution is: {solution}</div>
      </header>
    </div>
  );
}

export default App;
