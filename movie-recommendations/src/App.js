import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

const handleClick = () => {
  console.log("hi");
}

function App() {
  return (
    <div className="App">
      <Button title={'Next'} width={200} handleClick={handleClick} />
    </div>
  );
}

export default App;
