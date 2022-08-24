import React from 'react'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { ShopData } from '../../context/Shop'
import './CartContainer_styles.css'



const CartContainer = () => {

   const navigate = useNavigate();
   const {cart , total, removeItem} = useContext(ShopData);

   const handlePurchase = ()=>
   {
      navigate ('/checkout');
   }

      return (
         
         <div>

            {
            cart.length ? 
            <> 
                  <div className=" checkout">
                     {/* Total */}
                     <div className=' '>
                        <span>  
                           <h2>Total Compra</h2>
                           <h3> $ {total}</h3>
                           
                           {/* <span> <button onClick={ClearCart}> Limpiar carrito</button> </span> */}
                           <span> 
                              <button onClick={handlePurchase} className ='mt-4 btn btn-warning' >Confirmar comprar</button>  
                           </span> 
                        </span>
                     </div>
                   </div> 
               {cart.map (product => 
                  {
                     return (
                                 
                     <div  className='list  mt-4  mb-4 ' key={product.id}>
                        <div className='row'>
                           <div className='col mt-2 mb-2'>
                              <img  src={product.image} alt="product"/>
                           </div>

                           <div className='col product-feactures'>
                              <h3>{product.name}</h3>
                              <h5>{product.description}</h5>
                              
                           </div>
                           <div className='col product-feactures'>
                              <h5>${product.price}</h5>
                           </div>
             
                           <div className='col remove'>
                              <h4>x {product.cant}</h4>
                              <button onClick={()=> removeItem(product.id)} className ='ms-4 btn btn-danger'>X</button> 
                           </div>

                           <div className='col remove'>
                             
                           </div>

                        </div>

                           

                     </div>
               
                  )}
               )}
                              
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

