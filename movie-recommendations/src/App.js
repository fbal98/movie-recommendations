import './App.css';
import Button from './components/Button';
import Movie from './components/Movie';



const handleClick = () => {
  console.log("hi");
}


function App() {
  return (
    <div className="App">
      {/* <Button title={'Next'} width={200} handleClick={handleClick} /> */}
      <Movie posterSrc={'https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'} objectMetaData={!null} />
    </div>
  );
}

export default App;
