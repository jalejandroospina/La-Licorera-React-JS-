import React from 'react'
import './Item_styles.css'


// Card del producto
const Item = ({product}) =>  // recibe prop producto
{  
  return ( // render de cada producto
  
    
<>
<div className="">

    <div className="card">
        
        {/* Corregir ruta imagen */}
        <img src={product.image} alt="Product" /> 
        <h2 className='product'>{product.name}</h2>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        
        <p><button className="">Ver Producto</button></p>
    </div> 

</div>

</>
 
  )
}

export default Item