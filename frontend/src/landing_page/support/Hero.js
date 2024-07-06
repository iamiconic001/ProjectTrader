import React from "react";

function Hero() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          width: "100%",
          color: "white",
          height: "460px",
          backgroundColor: "#387ed1",
          padding: "6.5%",
        }}
      >
        <div className="row">
          <div className="col-3">
            <h3>Support Portal</h3>
          </div>
          <div className="col-7"></div>
          <div className="col-2">
            <h4
              style={{
                textDecoration: "underline",
                fontSize: "1.3em",
                fontWeight: "lighter",
              }}
            >
              Track tickets
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <h2
              className="mb-4 mt-3"
              style={{ fontSize: "1.7em", fontWeight: "lighter" }}
            >
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              style={{
                height: "65px",
                width: "80%",
                fontSize: "1.1em",
                padding: "10px",
              }}
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            />
            <br></br>
            <div style={{ paddingTop: "5%" }}>
              <span
                style={{
                  fontSize: "1.1em",
                  marginLeft: "0px",
                  textDecoration: "underline",
                }}
              >
                Track account opening
              </span>
              <span
                style={{
                  fontSize: "1.1em",
                  marginLeft: "20px",
                  textDecoration: "underline",
                }}
              >
                {" "}
                Track segment activation
              </span>
              <span
                style={{
                  fontSize: "1.1em",
                  marginLeft: "20px",
                  textDecoration: "underline",
                }}
              >
                {" "}
                Intraday margins
              </span>
              <p
                style={{
                  fontSize: "1.1em",
                  marginLeft: "0px",
                  textDecoration: "underline",
                }}
              >
                Kite user manual
              </p>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-5 mt-5">
            <h3 className="mb-2">Featured</h3>

            <p
              style={{
                fontSize: "1.1em",
                marginLeft: "0px",
                textDecoration: "underline",
              }}
            >
              1. Latest Intraday leverages and Square-off timings
            </p>
            <p
              style={{
                fontSize: "1.1em",
                marginLeft: "0px",
                textDecoration: "underline",
              }}
            >
              2. Surveillance measure on scrips - June 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
