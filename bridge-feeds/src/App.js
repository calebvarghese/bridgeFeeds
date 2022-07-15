import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bridge Feeds - Initial Commit
        </p>
        <a className="App-link" href="https://reactjs.org"target="_blank" rel="noopener noreferrer"> Learn React</a>
        <Button variant="contained" href="http://calebvar.com">
          Testing Button
        </Button>
      </header>
    </div>
  );
}

export default App;
