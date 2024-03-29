import React , {useContext, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import './ItemDetail_styles.css'
import ItemCount from '../ItemCount/ItemCount'
import { ShopData } from '../../context/Shop';




const ItemDetail = ({ productDetail }) => {

    const {addItem} = useContext(ShopData); // declaracion del context
    const [cant, setCantAdd]= useState (0); // estado para controlar la cantidad agregada
    const navigate = useNavigate();

    const OnAddCart =(cant)=>  // funcion agregar al carrito
    { 
       
        setCantAdd(cant);
        addItem(productDetail,cant);  // envio de variables a context
    }
    const onConfirm = () =>   // funcion terminar compra
    {
        navigate('/cart')
    }

    if (productDetail !== null) {   
        return (
            <>
                <div className="container text-center mt-5 mb-5">
                    <div className="row">
                        <div className="col">
                        <img className="img-product" src={productDetail.image} alt="Imge Product" /> 
                        </div>
                        <div className="col">
                            <div className='feactures'>
                                <p> {productDetail.category}</p>
                                <h3 className='product'>{productDetail.name}</h3>
                                <h4 className='description'>{productDetail.description}</h4>
                                <p className='price'>COP ${productDetail.price}</p>
                                {
                                cant === 0 ?
                                <ItemCount stock={10} handleAddCart={OnAddCart}/>
                                :
                                 <>
                                 <div>
                                    <Link to="/">  <button className='btn btn-warning mt-5 ' type="button"  >Seguir Comprando</button></Link>
                                    
                                    <button className='btn btn-danger mt-5 ms-2' type="button" onClick={onConfirm} >Terminar mi compra</button> 
                                 </div>
                                 </>
                                }
                                
                            </div>
                        </div>
                        
                    </div>
                    </div>

            </>
        )
    }
    return (
        <div className='load-display'>
             <h3 >Cargando ...</h3>
        </div>
    )
}

export default ItemDetail