import axios from 'axios';
import React, { useEffect, useState, createContext} from 'react';
export const ProductContext = createContext();
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
 // Import the toastify styles
export const ProductProvider = ({ children }) => {
  // console.log("Contex.jsx is rendering now a time");
  
  const [Products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  let foundProduct;
  let index;
  // Fetch products when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    };
    fetchData();
  }, []);


  // Function to add product to cart
const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.new_price * quantity);
    setTotalQuantities((prevTotalQty) => prevTotalQty + quantity);

    if (checkProductInCart) {
      // Update the quantity if the product already exists in the cart
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else {
          return item;
        }
      });

      setCartItems(updatedCart);
    } else {
      // Add new product to cart with quantity
      const newProduct = { ...product, quantity };
      setCartItems((prevCartItems) => [...prevCartItems, newProduct]);
    }

    // Show notification using react-toastify
    toast.success('Product added to cart');
  };
  


  // Function to remove product from cart
const onRemove = (product) => {
     foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.new_price * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  };


const toggleCartItemQuanitity = (id, value) => {
   
    
    foundProduct = cartItems.find((item) => item.id === id)
    
    index = cartItems.findIndex((product) => product.id === id);
    const newCartItems = cartItems.filter((item) => item.id !== id)

    if (value === 'inc') {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.new_price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if (value === 'dec') {
        if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.new_price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
        }
    }
}

  // Function to increase quantity
const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // Function to decrease quantity
const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

return (
    <ProductContext.Provider
      value={{
        Products,
        qty,
        totalPrice,
        totalQuantities,
        cartItems,
        setCartItems,
        incQty,
        toggleCartItemQuanitity,
        decQty,
        onRemove,
        onAdd,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
      <ToastContainer />
    </ProductContext.Provider>
  );
};