import React, { useContext ,useRef} from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styles/cart.css'

import { ProductContext } from '../context/Context';

const Cart = () => {
  const navigate=useNavigate();
  const { totalPrice, totalQuantities, cartItems, onRemove ,toggleCartItemQuanitity} = useContext(ProductContext);
  const cartref=useRef();
  const handelPay=()=>{
    navigate('/pay');
  }
  return (
    <div className="cart-wrapper" ref={cartref}>
      <div className="cart-container">
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <div className="cart-heading">
              <h3>Shopping Cart</h3>
              <h3>{totalQuantities} items</h3>
            </div>
            <hr />
            <div className="empty-cartitems">
              <AiOutlineShopping size={150} />
            </div>
            <div className="shopping-btn">
              <Link to='/'>
                <button className='btn-shopping'>Continue Shopping</button>
              </Link>
            </div>
          </div>
        )}


        {cartItems.length >= 1 && (
          <>
             <div className="product-box">
            <h2>Product</h2>
            <h2>Description</h2>
            <h2>Quantity</h2>
            <h2>Price</h2>
          </div>
           <hr />
            <div className="product-container">
              {cartItems.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.image} className="cart-product-image" alt={item.name} />
                  <h4 style={{width : '80px'}}>{item.name}</h4>
                  <div className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item.id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item.id, 'inc') }><AiOutlinePlus /></span>
                  </div>
                  <h4>{item.new_price * item.quantity}/-</h4>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              ))}
            </div>

          </>
        )}
        { cartItems.length>=1 && (
           <div className="cart-bottom">
           <h3>Subtotal:</h3>
           <h3>{totalPrice}/-</h3>
           <button type="button" className="btn-bottom" onClick={handelPay} >
             Pay Now
           </button>
         
          </div>
        )}
      </div>

    </div>
  )
}

export default Cart;
