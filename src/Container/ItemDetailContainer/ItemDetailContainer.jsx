import React from 'react'
import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState(null) // estado para setear los productos
    const {itemId} = useParams();
    
    useEffect(()=> 
    {
        const getProductDetail = async()=> 
        {
            try 
            {
                // https://pokeapi.co/api/v2/pokemon/93
                const response= await fetch(`/Mocks/products.json`) // fetch para traer el js de los productos
                const productsData = await response.json();

                let itemFilter = productsData.filter(product => product.id == itemId)

                setProductDetail(itemFilter); // seteo de estado con detalle de cada producto
                console.log("array del filter =", itemFilter)
                     
                
            }
            
            catch (error) 
            {
                alert(`Error: ${error.message}`)
            }
        } 
        getProductDetail();
    },[itemId])
  return (
    <ItemDetail productDetail={productDetail}/>   

  )
}
export default ItemDetailContainer