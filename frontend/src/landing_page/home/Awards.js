import React from "react";
function Awards() {
  return (
    <>
      <div className="container mt-5">
        <div className="row p-5">
          <div className="col-6">
            <img
              src="media/images/largest-broker.svg"
              style={{ width: "65%", marginLeft: "20px" }}
            ></img>
          </div>
          <div className="col-6">
            <h1 className="mb-4" style={{ fontSize: "36px" }}>
              Largest stock broker in India
            </h1>
            <p
              className="mb-4"
              style={{ fontSize: "17px", marginRight: "80px" }}
            >
              1.5+ Crore Zerodha clients contribute to over 15% of all retail
              order volumes in India daily by trading and investing in:
            </p>

            <div className="row" style={{ fontSize: "17px" }}>
              <div className="col-6">
                <ul>
                  <li className="mb-3">Futures and Options</li>
                  <li className="mb-3">Commodity derivatives</li>
                  <li className="mb-3">Currency derivatives</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li className="mb-3">Stocks & IPOs</li>
                  <li className="mb-3">Direct mutual funds</li>
                  <li className="mb-3">Bonds and Govt. Securities</li>
                </ul>
              </div>
            </div>
            <img
              style={{ width: "80%", marginLeft: "20px" }}
              src="media/images/press-logos.png"
              alt="press images "
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
