import React , {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom';
import {db} from '../../Firebase/config'
import { collection, query, getDocs } from "firebase/firestore";
import Banners from '../../components/Banners/Banners'

const ItemListContainer = () => {
  // console.log(db);

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
                if(products.length === 0) // filtro lista de productos
                {

                  const productItem = [];
                  const quer = query(collection(db, "products")); //query a db firestore
                  const querySnapshot = await getDocs(quer);      //ejecución de la query
                  querySnapshot.forEach((doc) => {               // snapshot (un array con todos los documentos)
                  // console.log(doc.id, " => ", doc.data()) ;       // doc.id , id generado por firebase
                  const product ={id: doc.id , ...doc.data()}      //array con info de documento en firebase
                  productItem.push(product);
                      });

                  setProducts(productItem);       // seteo de estado con los productos en firebase
                  // const response = await fetch(`/Mocks/products.json`) // fetch para traer el js de los productos
                  // const productsData = await response.json();
                  //
                        // console.log(products);
                }
                else
                {  
                  console.log(categoryId);
                  //Filtro por categoria
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
    <>
    <Banners/>
    <ItemList products={products}/>
    
    </>
  )
}

export default ItemListContainer

