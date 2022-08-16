import React from 'react'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ShopData } from '../../context/Shop'
import './CartContainer_styles.css'



const CartContainer = () => {

   const navigate = useNavigate();
   const {cart , total, removeItem, ClearCart} = useContext(ShopData);

   const handlePurchase = ()=>
   {
      navigate ('/checkout');
   }

      return (
         
         <div>

            {
            cart.length ? 
            <>  
               {cart.map (product => 
                  {
                     return (
                                 
                     <div  className='container mt-4  mb-4 ' key={product.id}>
                        <div className='row'>
                           <div className='col mt-2 mb-2'>
                           <img  src={product.image} alt="product-image"/>
                        </div>

                        <div className='col product-feactures'>
                           <h2>{product.name}</h2>
                           <h5>{product.description}</h5>
                           <h5>${product.price}</h5>
                        </div>
                                          
                        <div className='col product-feactures'>
                           <h4>Cantidad : {product.cant}</h4>
                        </div>

                        <div className='col product-feactures'>
                           <button onClick={()=> removeItem(product.id)} className ='btn btn-danger'>X</button>
                        </div>

                     </div>

         </div>
               
                  )}
               )}
                  <div className='container mt-4 mb-4'>
                  <h3>Total : $ {total}</h3>
                  <button onClick={ClearCart}> Limpiar carrito</button>
                  <button onClick={handlePurchase}>Confirmar comprar</button> 
                  </div>
            </> 
            : 
            <>
            <div className='cart-display'>
               <h3 >El carrito está vacío</h3>
               <button> Ir a comprar</button>
            </div>
            </>
         }
               
         </div>
      )
      
    
        
      
       
     
       
}

// // return (
// //    <div className='container'>
// //      {
// //      cart.length ? 
// //      <>
// //        {cart.map(product => {
// //          return (
// //            <div className='cart-item' key={product.id}>
// //              <img src={product.sprites.front_default} alt="producto-carrito" />
// //              <p>{product.name}</p>
// //              <p>Cantidad: {product.quantity}</p>
// //              <button onClick={() => removeItem(product.id)}>Eliminar producto</button>
// //            </div>
// //          )
// //        })}
// //        <div className='bottom-container'>
// //          <h3>Total: USD{total}</h3>
// //          <button onClick={clearCart}>Limpiar carrito</button>
// //          <button onClick={handlePurchase}>Confirmar comprar</button>
// //        </div>
// //      </>
// //      :
// //      <h3>El carrito está vacío</h3>
// //      }
// //    </div>
//  )

export default CartContainer

