import React from 'react'
import { useEffect , useState} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [productsDetail, setProductsDetail] = useState(null) // estado para setear los productos

    useEffect(()=> 
    {
        const getProductDetail = async()=> 
        {
            try 
            {
                
                // https://pokeapi.co/api/v2/pokemon/93
                const response= await fetch("/Mocks/products.json") // fetch para traer el js de los productos
                const data = await response.json();
                console.log(data);
                let ItemSelect= data.find(data => data.id === 1)
                console.log(ItemSelect)
                setProductsDetail(ItemSelect);
                        
            } catch (error) 
            {
                alert(`Error: ${error.message}`)
            }
        }
        getProductDetail();
    },[])
  return (
    <ItemDetail productDetail={productsDetail}/>   

  )
}

export default ItemDetailContainer