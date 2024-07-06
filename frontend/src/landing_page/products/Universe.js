import React from "react";
function Universe() {
  return (
    <>
      <div className="container" style={{ paddingTop: "80px" }}>
        <div className="row text-center">
          <h1 style={{ paddingBottom: "20px" }}>The Zerodha Universe</h1>
          <p style={{ fontSize: "18px", lineHeight: "2" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row text-center" style={{ paddingTop: "80px" }}>
          <div className="col-1"></div>
          <div className="col-3">
            <img
              src="media/images/smallcase-logo.png"
              alt="small case image"
              style={{ paddingBottom: "10px", width: "55%" }}
            ></img>
            <p>Thematic investment platform</p>
          </div>
          <div className="col-4">
            <img
              src="media/images/streak-logo.png"
              alt="streak image"
              style={{ paddingBottom: "10px", width: "38%" }}
            ></img>
            <p>Algo and strategy platform</p>
          </div>
          <div className="col-3">
            <img
              src="media/images/sensibull-logo.svg"
              alt="sensibull image"
              style={{ paddingBottom: "15px", width: "55%" }}
            ></img>
            <p>Options trading platform platform</p>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row text-center" style={{ paddingTop: "80px" }}>
          <div className="col-1"></div>
          <div className="col-3">
            <img
              src="media/images/zerodhafundhouse.png"
              alt="zerodha fundhouse image"
              style={{ paddingBottom: "20px", width: "55%" }}
            ></img>
            <p>Asset management</p>
          </div>
          <div className="col-4">
            <img
              src="media/images/tijori.svg"
              alt="fundamental image"
              style={{ paddingBottom: "10px", width: "38%" }}
            ></img>
            <p>Fundamental research platform</p>
          </div>
          <div className="col-3">
            <img
              src="media/images/ditto-logo.png"
              alt="ditto image"
              style={{ paddingBottom: "15px", width: "35%" }}
            ></img>
            <p>Insurance</p>
          </div>
          <div className="col-1"></div>
        </div>
        <div
          className="row"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        >
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto", marginTop: "20px" }}
          >
            SignUp Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
