
import React , {useState} from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

  const [state, setState]= useState ('Estado inicial') 
      //variable,funcion setear estado = hook (valor inicial del estado)


  return (
    <div>
      <p>{greeting}</p>
      <h3>{state}</h3>
      <ItemCount/>
    </div>
  )
}

export default ItemListContainer