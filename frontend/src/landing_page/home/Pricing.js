import React from "react";
function Pricing() {
  return (
    <div className="container mb-5" style={{paddingTop:"50px" , paddingBottom:"50px"}}>
      <div className="row">
        <div className="col-5" style={{paddingLeft:"85px"}}>
          <h1 className="mb-5" style={{ fontSize: "35px" }}>
            Unbeatable pricing
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "2" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.{" "}
          </p>
          <a
            style={{              
              fontWeight: "normal",
              fontSize: "1.1em",
            }}
            href="#"
          >
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <div className="row">
            <div className="col-6 border text-center">
              <h1 className="p-3" style={{fontSize:"2.8em"}}>&#8377; 0</h1>
              <p className="p-4" style={{ fontSize: "18px", lineHeight: "2" }}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-6 border text-center">
              <h1 className="p-3" style={{fontSize:"2.8em"}}>&#8377; 20</h1>
              <p className="p-4" style={{ fontSize: "18px", lineHeight: "2" }}>
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
