import React from 'react'
import './ItemDetail_styles.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({ productDetail }) => {
    if (productDetail !== null) {
        return (
            <>
                <div className="container text-center">
                    <div className="row">
                        <div className="col  ">
                        <img className="img-product" src={productDetail.image} alt="productDetail" /> 
                        </div>
                        <div className="col">
                            <div className='feactures'>
                                <h3 className='product'>{productDetail.name}</h3>
                                <h4 className='description'>{productDetail.description}</h4>
                                <p className='price'>${productDetail.price}</p>
                                <ItemCount/>
                            </div>
                        </div>
                        
                    </div>
                    </div>

            </>
              
                
            
                
            
                

          
        )
    }
    return (
        <p>Loading...</p>
    )
}

export default ItemDetail