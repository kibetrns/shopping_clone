import './App.css';
import NavBar from './components/nav-bar';
import SearchBar from './components/search-bar';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />

        <SearchBar />
      </nav>
    </div>
  );
}

export default App;
