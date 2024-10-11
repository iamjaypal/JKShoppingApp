import React, { useContext,useEffect,useState } from "react";
import Card from "./Card";
import '../Styles/women.css'
import { ProductContext } from "../context/Context";
function Womens(){
    const [womenproducts,setWomenproducts]=useState([]);
    const {Products}=useContext(ProductContext);
    useEffect(()=>{
     const filterproducts=Products.filter((item)=>item.category==='women')
     console.log("women.jsx useeffect is running...");
     
     setWomenproducts(filterproducts);
    },[Products])
    return (
       <>
        <div className="womens">
            
            {
                womenproducts.map((item)=>(
                    <>
                     <Card product={item}/>
                     
                    </>
                ))
            }
        </div>
       </>
    )
}

export default Womens;