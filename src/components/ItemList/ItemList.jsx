import React from 'react'
import Item from '../Item/Item'
import "./ItemList_styles.css"

const ItemList = ({products}) => { //recibe prop  productos
  return (

    <div className='container'>
        {products.map(product =>{  
                return  <Item key={product.id} product = {product} /> // key unica para hacer el map 
            })
        }

    </div>
   


  
  )
}

export default ItemList