import React , {useState} from 'react'
import './itemCount_styles.css'

    const ItemCount = ({stock, handleAddCart}) => {
        const [cant,setCant]= useState(1)

    const decrement = ()=>
    {
        if (cant > 1 )
        {
            setCant (cant - 1)
        } 
    }
    const add = ()=>
    {
        if(cant < stock)
        {
            setCant (cant + 1)
        }
        
    }

  return (
            <>
            <div className='buttons'>

                <button onClick={decrement}
                    type="button" className="btn btn-danger"> -
                </button>

                <span className='quantity'> {cant} </span>

                <button onClick={add}
                    type="button" className="btn btn-secondary "> +
                </button>


                <button  onClick={() => handleAddCart(cant)}
                    type="button" className="btn btn-warning addCart">Agregar Al Carrito
                </button> 
                
            </div>
            </>
              
         )
}

export default ItemCount