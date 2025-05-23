import React from 'react'
import { addProductPanier } from '../redux/slices/panierSlice'
import { useDispatch } from 'react-redux'



const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <h3 >{product.name}</h3>
      <img width ="40%"src={product.poster} alt='productImg'/>
      <h4>{product.price}</h4>
      <p>{product.description}</p>
      <button onClick={()=> dispatch(addProductPanier(product))}>add to card</button>
    </div>
  )
}

export default ProductCard
