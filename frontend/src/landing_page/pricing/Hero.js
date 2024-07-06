import React from "react";
function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center" style={{ paddingTop: "80px" }}>
        <h1 style={{ fontSize: "50px" }} className="mb-3">
          Pricing
        </h1>
        <h3 style={{ fontSize: "22px", fontWeight: "normal" }}>
          Free equity investments and flat ₹20 intraday and F&O trades.
        </h3>
      </div>

      <div className="row" style={{ paddingTop: "160px" }}>
        <div className="col-1"></div>
        <div className="col-3 text-center">
          <img
            src="media/images/pricing-eq.svg"
            alt="zero image"
            style={{ width: "62%" }}
          ></img>
          <h2 style={{ fontSize: "32px", paddingBottom: "12px" }}>
            Free equity delivery
          </h2>
          <p style={{ fontSize: "1.05em", lineHeight: "1.7" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/other-trades.svg"
            alt="zero image"
            style={{ width: "62%" }}
          ></img>
          <h2 style={{ fontSize: "32px", paddingBottom: "12px" }}>
            Intraday and F&O trades
          </h2>
          <p style={{ fontSize: "1.05em", lineHeight: "1.7" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-3 text-center">
          <img
            src="media/images/pricing-eq (1).svg"
            alt="zero image"
            style={{ width: "62%" }}
          ></img>
          <h2 style={{ fontSize: "32px", paddingBottom: "12px" }}>
            Free direct MF
          </h2>
          <p style={{ fontSize: "1.05em", lineHeight: "1.7" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Hero;
