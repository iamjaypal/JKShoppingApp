import React,{useContext} from 'react'
import '../Styles/navbar.css'
import { Link } from 'react-router-dom';
import {AiOutlineShopping} from 'react-icons/ai'
import { ProductContext } from '../context/Context';
function Navbar() {
  const {totalQuantities}=useContext(ProductContext);
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">JKShop</Link>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/004/829/110/small/the-sultan-s-or-guru-crown-logo-design-a-minimalist-and-luxurious-royal-symbol-icon-in-gold-free-vector.jpg" alt="Logo" />
        </div>
        <div className="nav-center">
          <ul className='nav-links'>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/mens">Mens</Link></li>
            <li> <Link to="/women">Women</Link></li>
            <li> <Link to="/kids">Kids</Link></li>
          </ul>
        </div>
        <div className="nav-right">
            <div className="cart-icon">
            <Link to="/cart"> <AiOutlineShopping size={40}/></Link>
            <span className='count-quantity'>{totalQuantities}</span>
            </div>
         
        </div>
      </div>
    </>
  )
}

export default Navbar
