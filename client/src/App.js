import logo from './logo.svg';
import './App.css';
import CF from '../config'


function App() {
    const server_test_URL = CF.apiURL + '/test'

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href={server_test_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Test
            </a>
          </header>
        </div>
    );
}

export default App;
