import React from "react";
import { NavLink } from "react-router-dom";

const Datails = ({ data,onAddToCart, onRemoveFromCart}) => {
  
 
  return (
    <>
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10vh" }}>
          Enjoy Shopping
        </h1>
        <NavLink to='/cart'>
          <button className="btn"style={{marginLeft:'80vw'}} >Cart items</button>

          </NavLink>
    </div>
    <div className="containear">
      
      {data.map((item) => (
        <>
        
        {/* <h3 style={{color: 'brown'}}>{item.category}</h3> */}

        <div className="contaier-box">

          <div className="images">
            <img src={item.image} alt ='img' style={{ width: 200, height: 250 }}/>
           
          </div>
          <div className="img_details">
          <h3 style={{color: 'brown'}}>{item.title}</h3>
          <p style={{color: 'green'}}> Price : ${item.price}</p>

          
          <NavLink to={`/imageDetails/${item.id}`}>
            <button className="btn">Show Details</button>

          </NavLink>
          
          <button onClick={() => onAddToCart(item)} className="btn" >Add to Cart</button>

          



          </div>
        </div>
        </>
      ))}

     
    </div>
    </>
  );
};

export default Datails;
