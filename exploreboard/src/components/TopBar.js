import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
function TopBar() {
  return (
    <>
      <div className="container-fluid" style={{position:"sticky", top:"0" , backgroundColor:"white"}}>
        <div className="row">
          <div
            className="col-4 border  text-center"
            style={{ height: "70px", paddingTop: "25px" }}
          >
            <h3 style={{ fontSize: "0.95em", marginRight: "80px" }}>
              NIFTY&nbsp;50&nbsp; &nbsp; &nbsp;{" "}
              <span style={{ color: "#eb4c42" }}>100.2</span>&nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;SENSEX &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#eb4c42" }}>100.2</span>{" "}
            </h3>
          </div>
          <div className="col-8 border text-center" style={{ display: "flex" }}>
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
