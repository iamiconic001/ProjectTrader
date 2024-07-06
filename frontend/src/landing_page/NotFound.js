import React from 'react';
function NotFound() {
    return ( 
        <div className='container p-5 text-center mb-5'>
        <div className='row'>
             <h1 style={{fontSize:"35px"}} className='mt-5 mb-4'>404 NOT FOUND</h1>
             <p className='mb-4 fs-5'>We couldn’t find the page you were looking for. Visit Zerodha’s home page</p>
             <button className='p-2 btn btn-primary fs-5' style={{width:"20%",margin:"0 auto"}}>Go Home</button>
        </div>
  </div>
     );
}

export default NotFound;