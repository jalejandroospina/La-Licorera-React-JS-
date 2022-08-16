//Guardar Orden en Firebase
import {addDoc, collection, doc,getDoc,writeBatch} from "firebase/firestore"
import {db} from "..Firebase/config"

const saveOrder = (cart , order) =>
{

    //Abrir batch
    const batch = writeBatch(db);
    // Array para definir productos sin stock
    const outOfStock =[];

    // Check de Stock en DB y actualización de cantidad
    cart.forEach(productInCart => 
        {
            getDoc((db , 'products', productInCart.id))
            .then(async (documentSnapshot)=>
            {
                // Se generan los datos del producto real y se obtiene el stock antes de guardar
                const product = {...documentSnapshot.data(),id:documentSnapshot.id}

                //Update en caso que el sctock supere la cantidad
                if(product.stock >= productInCart.cant)
                {
                    batch.update(doc(db,'products', product.id),
                    {
                        stock : product.stock - productInCart.cant
                    })
                }

                else
                {
                    outOfStock.push(product)
                }

                if(outOfStock.lenght ===0)
                {
                    addDoc(collection(db,'orders'),order).then(({id}) =>
                        {
                            //Commit para generar la orden
                            batch.commit().then(()=>
                            {
                                alert("Orden Generada : "+ id)
                            })
                        })
                        .catch((err) =>
                        {
                            console.log(`Error: ${err.message}`);
                        })    
                }
                //Si no hay stock se avisa al usuario
                else
                {
                    let message = ''
                    for(const product of outOfStock)
                    {
                        message += `${product.title}`
                    }
                    alert(`Sin Stock : ${message}`)
                }
            })
        })

}

export default saveOrder;