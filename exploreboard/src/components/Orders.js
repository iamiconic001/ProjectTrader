import React from "react";
function Orders() {
  return (
    <>
      <div className="container text-center">
        <div style={{ paddingTop: "120px", paddingLeft: "20px" }}>
          <p style={{ fontSize: "1.4em" }}>
            You haven't placed any orders today
          </p>
          <button
            style={{ height: "40px", width: "160px" }}
            className="btn btn-primary"
          >
            Get started
          </button>
        </div>
      </div>
    </>
  );
}

export default Orders;
