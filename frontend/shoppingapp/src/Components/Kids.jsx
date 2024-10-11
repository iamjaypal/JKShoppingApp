import React ,{useContext,useState,useEffect}from 'react'
import { ProductContext } from '../context/Context';
import '../Styles/kids.css'
import Card from './Card';
function Kids(){
    const [kidsproducts,setKidsproducts]=useState([]);
    const {Products}=useContext(ProductContext);
    useEffect(()=>{
     const filterproducts=Products.filter((item)=>item.category==='kid')
     setKidsproducts(filterproducts);
    },[Products])
    return (
        <>
         <div className="kids">
         {
                kidsproducts.map((item)=>(
                    <>
                     <Card product={item}/>
                    </>
                ))
            }
         </div>
        </>
    )
}

export default Kids;