import './App.css';
import './styles/nav-bar.css'
import NavBar from './components/nav-bar';
import HomePage from './pages/home/home-page';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
