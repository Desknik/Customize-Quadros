import './styles/App.css';
import Navbar from './components/Navbar/Index'
import Home from './pages/Home/Index'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <header className="App-header">
        <h1>Customize - Quadros</h1>
        <p>Criando o Hero...</p>
      </header>
    </div>
  );
}

export default App;
