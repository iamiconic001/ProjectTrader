import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import { holdings } from "../data/data.js";
import { VerticalGraph } from "./VerticalGraph.js";

function Holdings() {

     const[allHoldings, setAllHoldings]=useState([]);

     useEffect(()=> {
       axios.get("http://localhost:3002/allHoldings").then((res)=>{
        setAllHoldings(res.data);
       });
     },[]);

     const labels = allHoldings.map((subArray)=>subArray["name"]);
const data = {
    labels,
    datasets: [
        {
            label: "Stock Price",
            data: allHoldings.map((stock)=> stock.price),
            backgroundColor: "rgba(255,99,132,0.5)",
        },
    ],
};




  return (
    <>
      <div className="container" >
        <div className="row mb-5" style={{ paddingTop: "60px" }}>
          <h3 style={{ fontSize: "1.55em", fontWeight: "lighter" }}>
            Holdings ({allHoldings.length})
          </h3>
        </div>

        <div className="order-table mt-5" style={{ paddingBottom: "120px" }}>
          <table
            style={{
              width: "100%",
              border: "1px solid lightgrey",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ fontSize: "1.15em", textAlign: "left" }}>
                <th
                  style={{
                    padding: "25px",
                    fontWeight: "lighter",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  Instrument
                </th>
                <th
                  style={{
                    padding: "20px",
                    fontWeight: "lighter",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  Qty.
                </th>
                <th
                  style={{
                    padding: "20px",
                    fontWeight: "lighter",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  Avg. cost
                </th>
                <th
                  style={{
                    padding: "20px",
                    fontWeight: "lighter",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  LTP
                </th>
                <th
                  style={{
                    padding: "20px",
                    fontWeight: "lighter",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  Cur. val
                </th>
                <th
                  style={{
                    padding: "20px",
                    fontWeight: "lighter",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  P&L
                </th>
                <th
                  style={{
                    padding: "20px",
                    fontWeight: "lighter",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  Net chg.
                </th>
                <th
                  style={{
                    padding: "20px",
                    fontWeight: "lighter",
                    borderBottom: "1px solid lightgrey",
                  }}
                >
                  Day chg.
                </th>
              </tr>
            </thead>
            <tbody>
              {allHoldings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.day >= 0 ? "profit" : "loss";
               
                return (
                  <tr key={index}>
                    <td
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                        borderBottom: "1px solid lightgrey",
                        color: "black",
                      }}
                    >
                      {stock.name}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      {stock.qty}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      {stock.avg.toFixed(2)}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      {stock.price.toFixed(2)}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                        borderBottom: "1px solid lightgrey",
                      }}
                    >
                      {curValue.toFixed(2)}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                        borderBottom: "1px solid lightgrey",
                        color: isProfit ? "green" : "red",
                      }}
                      className={profClass}
                    >
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                        borderBottom: "1px solid lightgrey",
                        color: isProfit ? "green" : "red",
                      }}
                      className={profClass}
                    >
                      {stock.net}
                    </td>
                    <td
                      style={{
                        padding: "20px",
                        fontWeight: "500",
                        borderBottom: "1px solid lightgrey",
                        // color: stock.day >= 0 ? "green" : "red",
                      }}
                      className={dayClass}
                    >
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="row" style={{paddingBottom:"120px"}}>
          <div className="col-3">
            <h2 style={{ fontSize: "2.2em", fontWeight: "lighter" }}>
              29,875.
            </h2>
            <p style={{fontSize:"1.5em"}}>55</p>
            <p style={{ paddingTop: "30px" , fontSize:"1.2em"}}>Total investment</p>
          </div>

          <div className="col-1"></div>

          <div className="col-2">
            <h2 style={{ fontSize: "2.2em", fontWeight: "lighter" }}>
              31,428.
            </h2>
            <p style={{fontSize:"1.5em"}}>95</p>
            <p style={{ paddingTop: "30px" ,fontSize:"1.2em" }}>Current value</p>
          </div>
          <div className="col-2"></div>

          <div className="col-4">
            <h2
              style={{
                fontSize: "2.2em",
                fontWeight: "lighter",
                color: "green",
              }}
            >
              1,553.40 (+5.20%)
            </h2>

            <p style={{ paddingTop: "70px", fontSize:"1.2em" }}>P&L</p>
          </div>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
}

export default Holdings;
