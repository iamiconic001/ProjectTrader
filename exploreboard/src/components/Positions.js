import React from 'react';
import axios from "axios";
import { useState , useEffect } from "react";
import { positions } from '../data/data.js'; 
function Positions() {



    const[allPositions, setAllPositions]=useState([]);

    useEffect(()=> {
      axios.get("http://localhost:3002/allPositions").then((res)=>{
       setAllPositions(res.data);
      });
    },[]);




    return ( 
        <>
            <div className='container'>
            <div className='row mb-5' style={{paddingTop:"60px"}}>
                <h3 style={{fontSize:"1.55em" , fontWeight:"lighter"}}>Positions (2)</h3>
            </div>
            
            <div className='order-table mt-5' style={{ paddingBottom: "120px" }}>
    <table style={{ width: "100%", border: "1px solid lightgrey", borderCollapse: "collapse" }}>
        <thead>
            <tr style={{ fontSize: "1.15em", textAlign: "left" }}>
                <th style={{ padding: "20px", fontWeight: "lighter", width: "15%", borderBottom: "1px solid lightgrey" }}>Product</th>
                <th style={{ padding: "20px", fontWeight: "lighter", width: "15%", borderBottom: "1px solid lightgrey" }}>Instrument</th>
                <th style={{ padding: "20px", fontWeight: "lighter", width: "10%", borderBottom: "1px solid lightgrey" }}>Qty.</th>
                <th style={{ padding: "20px", fontWeight: "lighter", width: "10%", borderBottom: "1px solid lightgrey" }}>Avg.</th>
                <th style={{ padding: "20px", fontWeight: "lighter", width: "10%", borderBottom: "1px solid lightgrey" }}>LTP</th>
                <th style={{ padding: "20px", fontWeight: "lighter", width: "15%", borderBottom: "1px solid lightgrey" }}>P&L</th>
                <th style={{ padding: "20px", fontWeight: "lighter", width: "15%", borderBottom: "1px solid lightgrey" }}>Chg.</th>
            </tr>
        </thead>
        <tbody>
            {positions.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.day >= 0 ? "profit" : "loss";
                return (
                    <tr key={index}>
                        <td style={{ padding: "20px", fontWeight: "500", borderBottom: "1px solid lightgrey" }}>{stock.product}</td>
                        <td style={{ padding: "20px", fontWeight: "500", borderBottom: "1px solid lightgrey" }}>{stock.name}</td>
                        <td style={{ padding: "20px", fontWeight: "500", borderBottom: "1px solid lightgrey" }}>{stock.qty}</td>
                        <td style={{ padding: "20px", fontWeight: "500", borderBottom: "1px solid lightgrey" }}>{stock.avg.toFixed(2)}</td>
                        <td style={{ padding: "20px", fontWeight: "500", borderBottom: "1px solid lightgrey" }}>{stock.price.toFixed(2)}</td>
                        <td style={{ padding: "20px", fontWeight: "500", borderBottom: "1px solid lightgrey", color: {isProfit} ? "green" : "red" }} className={profClass}>{stock.net}</td>
                        <td style={{ padding: "20px", fontWeight: "500", borderBottom: "1px solid lightgrey", color: stock.day >= 0 ? "green" : "red" }} className={dayClass}>{stock.day}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>





             </div>
             
        </>
     );
}

export default Positions;