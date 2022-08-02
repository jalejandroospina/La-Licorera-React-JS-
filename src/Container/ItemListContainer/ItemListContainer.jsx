import React , {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

  // const [state, setState]= useState ('Estado inicial') 
  //     //variable,funcion setear estado = hook (valor inicial del estado)

      const [products, setProducts] = useState([]) // estado para setear la lista con los productos
      const [productByCategory, setProductByCategory] = useState([]) //estado para setear la lista con los productos por categoria

      const {categoryId} = useParams(); // obtener prop categoria
      //console.log(categoryId);
 
      useEffect(()=> 
      {
        const getProducts = async()=> 
          {
              try 
              {
                if(products.length === 0)
                {
                  const response = await fetch(`/Mocks/products.json`) // fetch para traer el js de los productos
                  const productsData = await response.json();
                  setProducts(productsData);

                }
                else
                {
                  let categoryFilter = [...products]; // array para pushear los productos por categoria
                  if(categoryId)
                  {
                    categoryFilter = products.filter(product => product.category == categoryId) // filtro por categoria
                  } 
                  setProductByCategory(categoryFilter); // seteo de estado con la lista de  productos           
                }
                
                
                  
                
              } 
              catch (error) 
              {
                  alert(`Error: ${error.message}`)
              }
          }
          getProducts(); 
        
      }, [categoryId, products])
        
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

