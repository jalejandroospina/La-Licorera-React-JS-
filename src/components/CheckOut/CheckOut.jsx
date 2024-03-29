import React, { useState, useContext } from 'react'
import CreateOrder from '../../Services/CreateOrder';
import { collection, addDoc, getDoc, } from "firebase/firestore";
import { db } from '../../Firebase/config';
import { doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { ShopData  } from '../../context/Shop';
import {useNavigate} from 'react-router-dom'


const CheckOut = () => {

  // estados para formulario de checkout
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const {cart, ClearCart, total} = useContext(ShopData); // consumo de contexto
  const navigate = useNavigate();

  const handleEnd = ()=>
  {
     navigate ('/');
  }

  const handleSubmit = async(e)=>
  {
    e.preventDefault();

    const EmailEquals = verifyEmail === email;
    const EmptyFields = name ==="" || email==="" || verifyEmail==="";

    if(EmailEquals && !EmptyFields)
    {
      const order = CreateOrder(name, email,cart ,total)
      const docRef = await addDoc(collection(db,"orders"),order);
      console.log("Document written with ID: ", docRef.id);

      // Update de stock al generar la orden
      for (const item of cart)
      {
        const docRef = doc(db,"products", item.id);
        // Llamada a Firebase
        const docSnap = await getDoc(docRef);

        if(docSnap.exists())
        {
          const originalProduct = {id: docSnap.id, ...docSnap.data()}
          const productToUpdate = doc(db,"products", item.id);

          await updateDoc(productToUpdate,
            {
              stock: originalProduct.stock - item.cant
            });
        }

        else
        {
          console.log("No such document!");
        }
      }

      Swal.fire({
        icon: 'success',
        title: 'Orden Generada',
        html: docRef.id,
        confirmButtonColor: "orange"
      }).then(function (isConfirm)
        {
         
          handleEnd();
        })
      
      ClearCart();


    }
    else
    {
      Swal.fire
      ({
        icon: 'error',
        title: 'Uno de los campos es invalido',
        confirmButtonColor: "orange"
      })
    }
  }


  return (
    
    <>
    <div className='container'>
    <form className='p-5' onSubmit={handleSubmit}>
      <h1 className='mb-4'>Ingresa tus datos</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombres y Apellidos</label>
                <input type="text" className="form-control" id="exampleInputPassword1" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="repeatEmail" className="form-label">Confirmar correo electónico</label>
                <input type="email" className="form-control" id="repeatEmail" aria-describedby="emailHelp" value={verifyEmail} onChange={e => setVerifyEmail(e.target.value)} />
            </div>

            <button  className="btn btn-warning" >Continuar</button>
            
        </form>

    </div>
    </>

  )
}

export default CheckOut