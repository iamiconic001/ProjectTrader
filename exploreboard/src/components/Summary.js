import React from "react";
function Summary() {
  return (
    <>
      <div className="container" style={{overflow:"scroll" ,position:"fixed", height:"660px"  }}>
        <div className="row" style={{ paddingTop: "25px" }}>
          <h1 style={{ fontSize: "1.4em", marginTop: "8px" }}>Hi, Trader !</h1>
        </div>
        <hr style={{ opacity: "1", color: "#d3d3d3" }} />
        <h4
          style={{
            fontSize: "1.2em",
            paddingTop: "28px",
            fontWeight: "normal",
          }}
        >
          <i
            class="fa-regular fa-clock"
            style={{ opacity: "0.9", textSize: "1.2em" }}
          >
            {" "}
            &nbsp;
          </i>{" "}
          Equity
        </h4>
        <div
          className="row"
          style={{ paddingTop: "38px", paddingBottom: "38px" }}
        >
          <div className="col-1"></div>
          <div className="col-2 text-center">
            <h1 style={{ fontWeight: "normal" }}>3.74k</h1>
            <p>Margin available</p>
          </div>
          <div className="col-1"></div>
          <div
            className="col-3 text-center"
            style={{ borderLeft: "1px solid #d3d3d3" }}
          >
            <p style={{ fontSize: "1.1em" }}>
              Margins used &nbsp; <b>0</b>
            </p>
            <p style={{ fontSize: "1.1em" }}>
              Opening balance &nbsp;<b>3.74k</b>
            </p>
          </div>
          <div className="col-5"></div>
        </div>
        <hr style={{ opacity: "1", color: "#d3d3d3" }} />

        <h4
          style={{
            fontSize: "1.2em",
            paddingTop: "28px",
            fontWeight: "normal",
          }}
        >
          <i
            class="fa-solid fa-wallet"
            style={{ opacity: "0.7", textSize: "1.2em" }}
          >
            {" "}
            &nbsp;
          </i>{" "}
          Holdings (13)
        </h4>
        <div
          className="row"
          style={{ paddingTop: "48px", paddingBottom: "38px" }}
        >
          <div className="col-1"></div>
          <div className="col-2 text-center">
            <h1 style={{ fontWeight: "normal", color: "green" }}>1.55k</h1>
            <p style={{ color: "grey", paddingRight: "45px" }}>P&L</p>
          </div>
          <div className="col-1"></div>
          <div
            className="col-3 text-center"
            style={{ borderLeft: "1px solid #d3d3d3" }}
          >
            <p style={{ fontSize: "1.1em" }}>
              Current value &nbsp; <b>31.43k</b>
            </p>
            <p style={{ fontSize: "1.1em" }}>
              Investment &nbsp;<b>29.88k</b>
            </p>
          </div>
          <div className="col-5"></div>
        </div>
        <hr style={{ opacity: "1", color: "#d3d3d3" }} />
      </div>
    </>
  );
}

export default Summary;
