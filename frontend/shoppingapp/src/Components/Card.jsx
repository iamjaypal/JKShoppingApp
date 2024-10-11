import React from 'react'
import '../Styles/card.css'
import { useNavigate } from 'react-router-dom'
function Card({product}) {
  const navigate=useNavigate();
  const handelClick=()=>{
        navigate('/product' , {state : {product}});
  }
  return (
   <>
    <div className="card-container" onClick={handelClick}>
    
        <img src={product.image} alt="" />
        <div className='product-info'>
              <p>{product.name}</p>
              <div className="product-price">
              <p><strong>Rs : {product.new_price}/-</strong></p>
              <p className='old-price'>Rs : {product.old_price}</p>
              </div>
        </div>
     
    </div>
   </>
  )
}

export default Card
