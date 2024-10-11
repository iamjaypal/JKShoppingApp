import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/offer.css'
function Offer() {
  const navigate=useNavigate();
  const handelClick=()=>{
    navigate('/women');
  }
  return (
    <>
     <div className="offer">
        <div className="offer-left">

            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button onClick={handelClick}>Check Now</button>
        </div>
        <div className="offer-right">
            <img src="https://github.com/iamjaypal/image-data-project/raw/master/images/exclusive_image.png" alt="" />
        </div>
     </div>
    </>
  )
}

export default Offer
