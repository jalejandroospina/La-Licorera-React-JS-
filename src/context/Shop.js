import  React, { createContext, useState , useEffect } from "react";


export const ShopData = createContext(); // creación de contexto

const ShopProvider = ({children}) => {  // funcion (componente) de proveedor del contexto   

const  [cart,setCart] = useState([]); // definicion estado carrito
const [total, setTotal] = useState(0);
const [totalItems, setTotalItems] = useState(0);


const isInCart =(productId) =>  //funcion para ver si el item ya esta en el carrito
    {
        const productInCart = cart.find(product => product.id === productId)

        if(productInCart) return true  // si encuentra el producto 
        return false
    }

const addItem =  (item,cant)=>
{
    const quant = cant; // variable para distinguir de la propiedad del item count

    const finder = isInCart(item.id) // llamo a la funcion y le paso el id que viene del detail
   

    // 1. si se encuentra el producto ya agregado al carrito, entonces...
    if (finder)    
    {
        const cartFull = cart.map (product => 
            {   // map del carrito 
                if(product.id === item.id) return {...product,cant : product.cant + quant} // si el item ya esta en el carrito se suma la  cantidad al objeto
                else return product   // si no, retorna el item tal como venia de detail
            }
            )
            setCart(cartFull) // seteo de carrito con productos agregados
    }
    //2.  si no ..
    else
    {
        const itemToAdd = // creacion de objeto para agregar al cart
        {
            ...item,    // spread de las propiedades del producto para la
            cant: cant  // adicion de la propiedad cantidad
        }
        const cartFull = [...cart,itemToAdd];// variable  llenada con datos del objeto
        setCart(cartFull); // seteo de carrito con detalle y cantidad del producto
    }

}

    const removeItem = (ItemId)=>  //Metodo para eliminar elementos del carrito
    {
        const cartFilter = cart.filter(product => product.id !==ItemId); // filtro por elemento (si es diferente..)
        setCart(cartFilter); // seteo el carrito con el filtro
    }

    const ClearCart = () =>  // Metodo para limpiar e lcarrito
    {
        setCart([])
    }

    useEffect(() => {
        const total = cart.reduce((accumulator, currentProduct) => 
            accumulator = accumulator + currentProduct.cant * currentProduct.price,
            0)
        setTotal(total)
    }, [cart])

    useEffect(() => {
        const totalItems = cart.reduce((accumulator, currentProduct) => 
            accumulator = accumulator +  currentProduct.cant,
            0)
        setTotalItems(totalItems)
    }, [cart])



    return(
                            //retorno del proveedor con la funcion 
    <ShopData.Provider value = {{addItem, removeItem, ClearCart,cart,setCart, total, totalItems}}>  
        {children}     
    </ShopData.Provider>    
    )

}

export default ShopProvider;