import logo from './logo.svg';
import './App.css';
import Person from './components/share/Person/Person.js'
import Counter from './components/share/Counter/Counter.js'

function App() {
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
          Learn React, chumaco.
        </a>
        <div> 
        <Person name="Jose" surname="Rodriguez" age={35}/>
        <Person name="James" surname="Hetfield" age={58}/>
        <Person name="Julio" surname="Verne" age={97}/>
        </div>
        <div>
          <Counter numberIncrement = {2} numberDecrement= {7} />
        </div>
      </header>
    </div>
  );
}



export default App;
