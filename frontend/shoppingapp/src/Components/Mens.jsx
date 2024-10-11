import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Card from './Card';
import '../Styles/mens.css'
import { ProductContext } from '../context/Context';
function Mens() {
  // console.log("Men.jsx is rendering now a time");
  const [mensproduct,setMensproduct]=useState([]);
  const {Products}=useContext(ProductContext);
  useEffect(()=>{
    const filterProducts=Products.filter((item)=>item.category==='men')
    setMensproduct(filterProducts)
 },[Products])
  
  return (
    <>
     <div className="mens">

         {
            mensproduct.map((item,index)=>(
                <>
                  <Card product={item}/>
                </>

            ))
         }
     </div>
    </>
  )
}

export default Mens
