
import './App.css';
import Banners from './components/Banners';
import NavBar from './components/NavBar/';
import Footer from './components/Footer/';
import ItemListContainer from './Container/ItemListContainer/'
import CartWidget from './components/CartWidget';

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
        <ItemListContainer greeting ={"Prop Enviada"}/>
        <Banners/>
        <Footer/>
       
    </>
  );
}

export default App;
