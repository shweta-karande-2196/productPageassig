import "./App.css";
import Datails from "./Datails";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";
import ImageDetails from "./ImageDetails";
import { useEffect, useState } from "react";
import Cart from "./Cart";

function App() {
  const [data,setData]=useState([]);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    console.log("Adding to cart:", item);
    const existingProduct = cartItems.find((p) => p.id === item.id);
    if (existingProduct) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    console.log("Removing from cart:", item);
    const existingProduct = cartItems.find((p) => p.id === item.id);
    if (existingProduct.qty === 1) {
      // Remove the entire product from the cart
      const newCartItems = cartItems.filter((p) => p.id !== item.id);
      setCartItems(newCartItems);
    } else {
      // Update the quantity of the existing product
      setCartItems((prevCartItems) =>
        prevCartItems.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty - 1 } : p
        )
      );
    }
  };
  console.log("Cart items:", cartItems);



  
  useEffect(()=>{
    fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products').then(res=>{return res.json()}).then(res=>{
      setData(res);
    }
    );
  },[])
  console.log(data);

    
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Datails cartItems={cartItems} data={data}/>} />
        <Route path="/imageDetails/:id" element={<ImageDetails  data={data}/>} />
        <Route path="/cart" element={<Cart  
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onAddToCart={handleAddToCart} />} />

      </Routes>
    </div>
  );
}

export default App;
