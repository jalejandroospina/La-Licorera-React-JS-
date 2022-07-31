import React , {useState} from 'react'

const ItemCount = () => {
    const [cant,setCant]= useState(1)

const decrement = ()=>
{
    
    if (cant>1)
    {
        setCant (cant - 1)
    }
    
}
const add = ()=>
{
    if(cant<10)
    {
        setCant (cant + 1)
    }
    
}
const addCart = ()=>
{
    alert(`Agregado al carrito ${cant} productos`);
}
  return (
    <>
    <div style={{
        marginTop:'60px',
        marginBottom: '60px'
        
    }}>
        <button onClick={decrement}
            type="button" className="btn btn-danger">-
        </button>

        <span
            style={{
                fontSize:'120%',
                margin: '35px'
            }}
            >{cant}
        </span>

        <button onClick={add}
            type="button" className="btn btn-primary">+
        </button>


        <button  onClick={addCart}
            style={{
                marginTop:'7px',
                
                
            }}
            type="button" className="btn btn-warning">Agregar Al Carrito
        </button> 
        
    </div>
    </>
           
   
            
        
  )
}

export default ItemCount