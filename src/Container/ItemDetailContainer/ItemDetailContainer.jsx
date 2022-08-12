import React from 'react'
import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/config';

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
                const docRef = doc(db,"products", itemId) // query a Firebase, item dinamico
                const docSnap = await getDoc(docRef); // llamada a Firebase
                
                if(docSnap.exists())
                {
                   console.log(`Document data , id : ${docSnap.id} => data : ${JSON.stringify(docSnap.data())}`)
                    setProductDetail({id : docSnap.id, ...docSnap.data()})
                }
                else 
                {
                    console.log("No such Document")
                }   
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