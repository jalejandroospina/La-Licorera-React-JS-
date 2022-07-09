
import './App.css';
import Banners from './components/Banners';
import NavBar from './components/NavBar/';

function App() {
  const temp = 20;
  const spanStyles =
  {
    margin : 12,
    fontSize : 24,
  }

  return (
    <>
        <NavBar/>
        <Banners/>
       
    </>
  );
}

export default App;
