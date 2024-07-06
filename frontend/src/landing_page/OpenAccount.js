import React from 'react';
import Signup from "./signup/Signup.js";
import { useNavigate } from "react-router-dom";
function OpenAccount() {

     const navigate = useNavigate();

     const handleClick = (event) => {
          console.log("clicked");
          event.preventDefault();
       navigate("/signup"); 
     };

    return ( 
        <div className='container p-5 text-center mb-5'>
        <div className='row'>
             <h1 style={{fontSize:"35px"}} className='mt-5 mb-4'>Open a Zerodha account</h1>
             <p className='mb-4 fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
             <button onClick={handleClick} className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto" , marginTop:"20px"}} >SignUp Now</button>
        </div>
  </div>
     );
}

export default OpenAccount;