import React from 'react'
import { useContext } from 'react'
import {useNavigate , Link} from 'react-router-dom'
import { ShopData } from '../../context/Shop'
import './CartContainer_styles.css'



const CartContainer = () => 
{

   const navigate = useNavigate();
   const {cart , total, removeItem, totalItems} = useContext(ShopData);

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
                     <div> 
                        <div>
                           <h2>Total Compra </h2>
                           <p className='price'>COP ${total}</p>
                        </div> 
                        <div>
                           <p>Total Articulos :  {totalItems}</p>
                        </div>
                        
                        <span> 
                           <button onClick={handlePurchase} className ='mt-4 btn btn-warning' >Confirmar comprar</button>  
                        </span> 
                     </div>
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
                           <h5>COP ${product.price}</h5>
                        </div>
          
                        <div className='col remove'>
                           <h4>x {product.cant}</h4>
                           <button onClick={()=> removeItem(product.id)} className ='ms-4 btn btn-danger'>X</button> 
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
            
            <Link to="/"> <button className='btn btn-warning mt-5'> Ir a comprar </button>    </Link>
         </div>
         </>
      }
            
      </div>
   )
      
     
}
export default CartContainer

