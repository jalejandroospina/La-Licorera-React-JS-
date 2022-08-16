// Guardar producto
import { addDoc } from "firebase/firestore";
import {db} from "..Firebase/config";

const autoSave = async()=>
{
    const response = await fetch('mocks/data.json');
    const productsToSave = await response.json();

    productsToSave.forEach(async(product)=>
    {
        const docRef = await addDoc(collection(db,"products"),
        {
            name: product.name,
            price: product.price,
            description : product.description,
            category: product.category,
            image : product.image,
            stock: 20,
        });
        console.log("Documnet written wit ID:", docRef,id);
    })
}

export default autoSave;