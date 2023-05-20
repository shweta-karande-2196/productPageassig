import React from 'react'
import {useParams,NavLink } from 'react-router-dom'


const ImageDetails = ({data}) => {
  const img="https://static.tvmaze.com/uploads/images/medium_portrait/24/60454.jpg"

    const {id} = useParams();
    const details = data.filter((item)=>item.id == id);
    console.log(details);

  return (
    <>
    <NavLink to="/" style={{ textDecoration: "none"}}>
            <button className='backbtn'>back</button> 
         </NavLink>
    
        <div  className='productPage'>

                 

          {details.map(item=>(

              <div className='productDetails'>
                <div>
                  <img  src={item.image}alt='img'  style={{ width: 100, height: 200 }}/>

                </div>
                <div className='productinfo'>
                <h2 style={{ color:'orangered'}}>{item.title}</h2>
                <p> Price : ${item.price}</p>
                <summary>{item.description}</summary>

                </div>
              </div>



          ))}
           
           
        </div>
        </>
    
  )
}

export default ImageDetails