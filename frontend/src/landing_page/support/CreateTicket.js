import React from "react";
function CreateTicket() {
  return (
    <>
      <div className="container">
        <h2
          style={{
            fontSize: "1.6em",
            fontWeight: "normal",
            marginTop: "35px",
            paddingBottom: "30px",
            paddingLeft: "110px",
          }}
        >
          To create a ticket, select a relevant topic
        </h2>

        <div
          className="row mb-5"
          style={{ paddingTop: "20px", paddingLeft: "40px" }}
        >
          <div className="col-1"></div>
          <div className="col-3">
            <h3
              style={{
                fontSize: "1.4em",
                fontWeight: "normal",
                paddingBottom: "10px",
              }}
            >
              {" "}
              <i class="fa-solid fa-circle-plus"></i>&nbsp;&nbsp; Account
              Opening
            </h3>
            <ul
              style={{
                listStyleType: "none",
                fontSize: "1.1em",
                lineHeight: "2",
                color: "#387ed1",
              }}
            >
              <li>Getting started</li>
              <li>Online</li>
              <li>Offline</li>
              <li>Charges</li>
              <li>Company, Partnership and HUF</li>
              <li>Non Resident Indian (NRI)</li>
            </ul>
          </div>
          <div className="col-3" style={{ marginLeft: "80px" }}>
            <h3
              style={{
                fontSize: "1.4em",
                fontWeight: "normal",
                paddingBottom: "10px",
              }}
            >
              {" "}
              <i class="fa-regular fa-user"></i>&nbsp;&nbsp; Your Zerodha
              Account
            </h3>
            <ul
              style={{
                listStyleType: "none",
                fontSize: "1.1em",
                lineHeight: "2",
                color: "#387ed1",
              }}
            >
              <li>Login credentials</li>
              <li>Your Profile</li>
              <li>Account modification and segment addition</li>
              <li>CMR & DP ID</li>
              <li>Nomination</li>
              <li>Transfer and conversion of shares</li>
            </ul>
          </div>
          <div className="col-3" style={{ marginLeft: "80px" }}>
            <h3
              style={{
                fontSize: "1.4em",
                fontWeight: "normal",
                paddingBottom: "10px",
              }}
            >
              {" "}
              <i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp; Trading and
              Markets
            </h3>
            <ul
              style={{
                listStyleType: "none",
                fontSize: "1.1em",
                lineHeight: "2",
                color: "#387ed1",
              }}
            >
              <li>Trading FAQs</li>
              <li>Kite</li>
              <li>Margins</li>
              <li>Product and order types</li>
              <li>Corporate actions</li>
              <li>Kite features</li>
            </ul>
          </div>
        </div>

        <div
          className="row mb-5"
          style={{ paddingTop: "20px", paddingLeft: "40px" }}
        >
          <div className="col-1"></div>
          <div className="col-3">
            <h3
              style={{
                fontSize: "1.4em",
                fontWeight: "normal",
                paddingBottom: "10px",
              }}
            >
              {" "}
              <i class="fa-solid fa-wallet"></i>&nbsp;&nbsp; Funds
            </h3>
            <ul
              style={{
                listStyleType: "none",
                fontSize: "1.1em",
                lineHeight: "2",
                color: "#387ed1",
              }}
            >
              <li>Fund withdrawal</li>
              <li>Adding funds</li>
              <li>Adding bank accounts</li>
              <li>eMandates</li>
            </ul>
          </div>
          <div className="col-3" style={{ marginLeft: "70px" }}>
            <h3
              style={{
                fontSize: "1.4em",
                fontWeight: "normal",
                paddingBottom: "10px",
              }}
            >
              {" "}
              <i class="fa-solid fa-circle-radiation"></i> &nbsp;&nbsp;Console
            </h3>
            <ul
              style={{
                listStyleType: "none",
                fontSize: "1.1em",
                lineHeight: "2",
                color: "#387ed1",
              }}
            >
              <li>IPO</li>
              <li>Portfolio</li>
              <li>Funds statement</li>
              <li>Profile</li>
              <li>Reports</li>
              <li>Referral program</li>
            </ul>
          </div>
          <div className="col-3" style={{ marginLeft: "50px" }}>
            <h3
              style={{
                fontSize: "1.4em",
                fontWeight: "normal",
                paddingBottom: "10px",
              }}
            >
              {" "}
              <i class="fa-solid fa-circle-notch"></i> &nbsp;&nbsp;Coin
            </h3>
            <ul
              style={{
                listStyleType: "none",
                fontSize: "1.1em",
                lineHeight: "2",
                color: "#387ed1",
              }}
            >
              <li>Understanding mutual funds and Coin</li>
              <li>Coin app</li>
              <li>Coin web</li>
              <li>Transactions and reports</li>
              <li>National Pension Scheme (NPS)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicket;
