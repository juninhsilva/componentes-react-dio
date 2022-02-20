import logo from './logo.svg';
import Item from './components/item';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-after-logo">
        <h2>
          Minha primeira <code>página</code> em React
        </h2>
          <p>Bora brincar um pouquinho!</p>
          </div>
        <div>
          <ul class="list-group">
            <li><Item url="#" text="Item 1" tipo="primary"/></li>
            <li><Item url="#" text="Item 2" tipo="danger"/></li>
            <li><Item url="#" text="Item 3" tipo="info"/></li>
            <li><Item url="#" text="Item 4" tipo="success"/></li>
            <li><Item url="#" text="Item 5" tipo="warning"/></li>
            <li><Item url="#" text="Item 6" tipo="secondary"/></li>
            <li><Item url="#" text="Item 7" tipo="light"/></li>
            <li><Item url="#" text="Item 8" tipo="dark"/></li>
          </ul>
        </div>
        <div>
          <Card/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;
