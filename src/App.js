
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Banners from './components/Banners/Banners';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer'
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
       {/* <Banners/> */}
        {/* <ItemListContainer greeting ={"Prop Enviada"}/>   */}
        {/* <ItemCount cant={1}/> */}
        <ItemDetailContainer/> 

        {/* <Footer/> */}
       
       
    </>
  );
}

export default App;
