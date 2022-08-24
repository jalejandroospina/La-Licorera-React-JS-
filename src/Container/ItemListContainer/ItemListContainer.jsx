import React , {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';
import Banners from '../../components/Banners/Banners'
import getCollection from '../../Services/GetCollection';

const ItemListContainer = () => {

  // const [state, setState]= useState ('Estado inicial') 
  // //variable,funcion setear estado = hook (valor inicial del estado)

      const [products, setProducts] = useState([]) // estado para setear la lista con los productos
      const {categoryId} = useParams(); // obtener prop categoria
      
      useEffect(()=> 
      {
        const getProducts = async()=> 
          {
              try 
              {
                if(products.length === 0) // filtro lista de productos
                {
                  const products = await getCollection("products")
                  setProducts(products);       // seteo de estado con los productos en firebase       
                }
                else
                {  
                  //Filtro por categoria
                  let categoryFilter = [...products]; // array para pushear los productos por categoria
                  if(categoryId)
                  {
                    console.log(categoryId);
                    categoryFilter = products.filter(product => product.category == categoryId) // filtro por categoria
                  } 
                  setProducts(categoryFilter); // seteo de estado con la lista de  productos           
                } 
              } 
              catch (error) 
              {
                  alert(`Error: ${error.message}`)
              }
          }
          getProducts(); 
        
      }, [categoryId])
        
  return (
    <>
      <Banners/>
      <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer

