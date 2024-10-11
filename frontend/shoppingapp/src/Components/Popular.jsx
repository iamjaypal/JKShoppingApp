import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../Styles/popular.css'
function Popular() {
    const [popularItems, setpopularItems] = useState([]);
    useEffect(()=>{

        const fetchItems=async()=>{

             try{
                const res= await axios.get('http://localhost:3000/api/popular');
                setpopularItems(res.data);
             }
             catch(e){
                console.log('error is fetching data for popular items',e);
             }
             
        }
        fetchItems();
         
    },[])
    const navigate=useNavigate();
    const handelClick=()=>{
          navigate('/women');
    }
    return (
        <>
            <div className="popular">
                <h1>POPULAR IN WOMEN</h1>
                <hr />
                <div className="popular-items" onClick={handelClick}>
                    {
                        popularItems.map((item)=>(
                            <>
                             <div className="card">
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p><strong> Price : {item.new_price}</strong>/-</p>
                                
                             </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Popular
