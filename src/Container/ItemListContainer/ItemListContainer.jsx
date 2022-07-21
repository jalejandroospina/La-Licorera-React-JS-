
import React , {useState} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { productsData } from '../../Mocks/products'


const ItemListContainer = ({greeting}) => {

  // const [state, setState]= useState ('Estado inicial') 
  //     //variable,funcion setear estado = hook (valor inicial del estado)

      const [products, setProducts] = useState([]) // estado para setear los productos

      const getProducts = new Promise ((accept, reject)=> // promesa para traer los productos
      {
        setTimeout(()=>
        {
          accept(productsData)  // estado de aceptación y tiempo de espera 2 seg
        }, 2000)
      })

      getProducts 
      .then (result =>
        {
          setProducts(result)
        })
      .catch(error=>
        {
          alert(`Error: ${error}`)
        })  

        

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