import React from "react";
function Education() {
  return (
    <div className="container mt-5 p-5" style={{paddingBottom:"20px"}}>
      <div className="row" p-5>
        <div className="col-6">
          <img
            src="media/images/index-education.svg"
            alt="Education Image Varsity"
            style={{ width: "65%", marginLeft: "20px" }}
          ></img>
        </div>
        <div className="col-6">
          <h2 className="mb-5" style={{ fontSize: "30px" }}>
            Free and open market education
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "2" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            style={{
              
              fontWeight: "normal",
              fontSize: "1.1em",
            }}
            href="#"
          >
            Varsity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-3" style={{ fontSize: "18px", lineHeight: "2" }}>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            style={{
              
              fontWeight: "normal",
              fontSize: "1.1em",
            }}
            href="#"
          >
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
