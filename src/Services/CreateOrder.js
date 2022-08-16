//Fucion para generar la orden, crea objeto con datos del comprador y contenido del carrito

const CreateOrder = (name, email,cart,total) => 
{
    return{
        customer :
        {
            name : name,
            email: email,
        }, 
        items:cart,
        total : total,
        date: new Date().toLocaleDateString()
    }
}
export default CreateOrder;