
import './App.css';
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
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
      <BrowserRouter>
        <NavBar/> 
       {/* <Banners/>  */}
          <Routes> 
            <Route path='/' element={<ItemListContainer/> }> </Route> 
            <Route path='/category/:categoryId' element={<ItemListContainer/>}> </Route> 
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}> </Route> 
          </Routes>
          {/* <ItemCount cant={1}/> */}
        <Footer/>
      </BrowserRouter>
       
       
    </>
  );
}

export default App;
