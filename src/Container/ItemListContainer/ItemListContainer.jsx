
import React , {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'


const ItemListContainer = ({greeting}) => {

  // const [state, setState]= useState ('Estado inicial') 
  //     //variable,funcion setear estado = hook (valor inicial del estado)

      const [products, setProducts] = useState([]) // estado para setear los productos

      //const {categoryId} = useParams();
      //console.log(categoryId);

      // const getProducts = new Promise ((accept, reject)=> // promesa para traer los productos
      // {
      //   setTimeout(()=>
      //   {
      //     accept(productsData)  // estado de aceptación y tiempo de espera 1 seg
      //   }, 1000)
      // })

      // getProducts 
      // .then (result =>
      //   {
      //     setProducts(result)
      //   })
      // .catch(error=>
      //   {
      //     alert(`Error: ${error}`)
      //   }) 
      useEffect(()=> 
      {

        const getProducts = async()=> 
          {
              try 
              {
                  const response = await fetch(`/Mocks/products.json`) // fetch para traer el js de los productos
                  const productsData = await response.json();
                  setProducts(productsData); // seteo de estado con detalle de cada producto           
              } 
              catch (error) 
              {
                  alert(`Error: ${error.message}`)
              }
          }
          getProducts(); 
        
      }, [])
        

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