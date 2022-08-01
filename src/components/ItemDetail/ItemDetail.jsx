import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './ItemDetail_styles.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({ productDetail }) => {

    const navigate = useNavigate()

     
    const [cant, setCantAdd]= useState (0) // estado para contorlar la cantidad agregada

    const OnAddCart =(cant)=>
    {
        
        console.log("Agregado(s) al carrito",cant);
        setCantAdd(cant);
    }
    const onConfirm = () => {
        navigate('/cart')
    }
    

    if (productDetail !== null) {
        return (
            <>
                <div className="container text-center m-5">
                    <div className="row">
                        <div className="col">
                        <img className="img-product" src={productDetail.image} alt="Img Product" /> 
                        </div>
                        <div className="col">
                            <div className='feactures'>
                                <h3 className='product'>{productDetail.name}</h3>
                                <h4 className='description'>{productDetail.description}</h4>
                                <p className='price'>${productDetail.price}</p>
                                {
                                cant === 0 ?
                                <ItemCount stock={10} handleAddCart={OnAddCart}/>
                                :
                                <button onClick={onConfirm} >Terminar mi compra</button>
                                }
                                
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