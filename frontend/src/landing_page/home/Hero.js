import React from 'react';
import { useNavigate } from "react-router-dom";
function Hero() {

    const navigate = useNavigate();

     const handleClick = (event) => {
          console.log("clicked");
          event.preventDefault();
       navigate("/signup"); 
     };
    return ( 
        <>
         <div className='container p-5 text-center mb-5'>
               <div className='row'>
                    <img src='media/images/HomeHero.png' alt='HeroImage' className='mb-5' style={{width:"70%", marginLeft:"170px"}}></img>
                    <h1 className='mt-5 mb-3'>Invest in everything</h1>
                    <p className='mb-3 fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <button onClick={handleClick} className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto", marginTop:"20px"}}>SignUp Now</button>
               </div>
         </div>
         
         </>
     );
}

export default Hero;