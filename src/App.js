import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Product/>
      </header>
    </div>
  );
}

export default App;
