import {getDocs, query, collection} from "firebase/firestore";
import {db} from '../Firebase/config'


const getCollection =  async (collect) => 
{
    const quer = query(collection (db, collect)); //query a db firestore
    const querySnapshot = await getDocs(quer);      //ejecución de la query
    const products = [];
    querySnapshot.forEach((doc) => {               // snapshot (un array con todos los documentos)
    products.push({id: doc.id , ...doc.data()})      //array con info de documento en firebase
    
        });
        return products

} 

export default getCollection

