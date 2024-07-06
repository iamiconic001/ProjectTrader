import React from 'react';
function Team() {
    return ( 
        <div className="container" style={{paddingBottom:"20px"}}>
      <div className="row" p-5>
        <div className="col-6 text-center">
          <img
            src="media/images/nithin-kamath.jpg"
            alt="Education Image Varsity"
            style={{ width: "290px", marginLeft: "170px",marginTop:"40px", height:"290px" , borderRadius:"50%" }}
          ></img>
          <p className='text-center' style={{fontSize:"1.3em", marginLeft:"150px", marginTop:"40px"}}>Nithin Kamath</p>
          <p className='text-center'  style={{fontSize:"1.05em" , marginLeft:"150px"}}> Founder, CEO</p>
        </div>
        <div className="col-5" >
          <h1 className="mb-5" style={{ fontSize: "2.1em", paddingBottom:"1.1em" }}>
            People
          </h1>
          
          <p style={{lineHeight:"1.65" , fontSize:"1.05em"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p style={{lineHeight:"1.65" , fontSize:"1.05em"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p style={{lineHeight:"1.65" , fontSize:"1.05em"}}>Playing basketball is his zen.</p>

<p style={{lineHeight:"1.65" , fontSize:"1.05em"}}>Connect on <a href="" style={{ textDecoration: "none" }}>Homepage</a> / <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> / <a href="" style={{ textDecoration: "none" }}>Twitter</a></p>
          
        
        </div>
        <div className='col-1'></div>
      </div>
    </div>
  );
     
}

export default Team;