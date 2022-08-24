
import './App.css';
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer'
import NotFound from './components/PageNotFound/NotFound';
import ShopProvider from './context/Shop'; 
import CartContainer from './Container/CartContainer/CartContainer';
import CheckOut from './components/CheckOut/CheckOut';


function App() {
  

  return (
    <>
      <ShopProvider>
        <BrowserRouter>
          <NavBar/> 
            <Routes> 
              <Route path='/' element={<ItemListContainer/> }> </Route> 
              <Route path='/category/:categoryId' element={<ItemListContainer/>}> </Route> 
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}> </Route> 
              <Route path='/cart' element={<CartContainer/>}> </Route> 
              <Route path='/checkout' element={<CheckOut/>} />
              <Route path='*' element={<NotFound/>}> </Route> 
            </Routes>
          <Footer/>
        </BrowserRouter>
      </ShopProvider>
       
       
    </>
  );
}

export default App;
