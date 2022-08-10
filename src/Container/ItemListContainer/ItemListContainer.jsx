import React , {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';
import {db} from '../../Firebase/config'

const ItemListContainer = () => {

  // const [state, setState]= useState ('Estado inicial') 
  // //variable,funcion setear estado = hook (valor inicial del estado)

      const [products, setProducts] = useState([]) // estado para setear la lista con los productos
     

      const {categoryId} = useParams(); // obtener prop categoria
      // console.log(categoryId);
 
      useEffect(()=> 
      {
        const getProducts = async()=> 
          {
              try 
              {
                // console.log(db);
                if(products.length === 0) // filtro lista de productos
                {
                  const response = await fetch(`/Mocks/products.json`) // fetch para traer el js de los productos
                  const productsData = await response.json();
                  setProducts(productsData);

                }
                else
                {                     //Filtro por categoria
                  let categoryFilter = [...products]; // array para pushear los productos por categoria
                  if(categoryId)
                  {
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
    // <div>
    //   {/* <p>{greeting}</p>
    //   <h3>{state}</h3>
    //   <ItemCount/> */}
    // </div>
      <ItemList products={products}/>
  )
}

export default ItemListContainer

