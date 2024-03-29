import React from 'react'
import './Item_styles.css'
import { useNavigate} from 'react-router-dom'




// Card del producto
const Item = ({product}) =>  // recibe prop producto
{  
  const navigate = useNavigate();

  const handleNavigate = (id) =>
  {
    navigate(`/item/${id}`)
 
  }
   
  return ( // render de cada producto
  
            <>
            <div onClick={()=>handleNavigate(product.id)}>

                <div className="card">
                    <p className='category'>{product.category}</p>
                    <img src={product.image} alt="Product" /> 
                    
                    <h2 className='product'>{product.name}</h2>
                    <p className="description">{product.description}</p>
                    <p className="price">COP ${product.price}</p>
                    
                    <p><button  onClick={()=>handleNavigate(product.id)}>Ver Producto</button></p>
                </div> 

            </div>

            </>
 
          )
}

export default Item