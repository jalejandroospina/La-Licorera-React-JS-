
import './App.css';
import Banners from './components/Banners/Banners';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';

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
        {/* <ItemListContainer greeting ={"Prop Enviada"}/> */}
        {/* <Banners/> */}
        <ItemCount cant={1}/>
        {/* <Footer/> */}
       
    </>
  );
}

export default App;
