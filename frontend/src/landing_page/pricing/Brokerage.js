import React from "react";

function Brokerage() {
  return (
    <div className="container p-5" style={{ paddingTop: "60px" }}>
      <div className="row">
        <div className="col-6">
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "1.3em",
              paddingLeft: "27%",
            }}
          >
            Brokerage calculator
          </a>
          <ul className="mt-5" style={{ lineHeight: "1.9", fontSize: "0.9em" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-6">
          <a
            href="#"
            className="pb-5 mb-5"
            style={{
              textDecoration: "none",
              fontSize: "1.3em",
              paddingLeft: "27%",
            }}
          >
            List of charges
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
