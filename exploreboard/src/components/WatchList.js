import React from 'react';
import {useState} from "react";
import {Tooltip , Grow} from "@mui/material";
import {BarChart, BarChartOutlined, Flare, KeyboardArrowDown , KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import {watchlist} from "../data/data.js";
import { DoughnutChart } from './DoughnutChart.js';


const labels = watchlist.map((subArray)=>subArray["name"]);
function WatchList() {

const data={
   labels,
   datasets: [
      {
         label: "Price",
         data: watchlist.map((stock)=>stock.price),
         backgroundColor: [
           'rgba(255, 99, 132, 0.5)',
           'rgba(54, 162, 235, 0.5)',
           'rgba(255, 206, 86, 0.5)',
           'rgba(75, 192, 192, 0.5)',
           'rgba(153, 102, 255, 0.5)',
           'rgba(255, 159, 64, 0.5)',
         ],
         borderColor: [
           'rgba(255, 99, 132, 1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)',
         ],
         borderWidth: 1,
      }
   ]
}


    return ( 
      <>
         <div className='container-fluid text-center' style={{overflow:"scroll",position:"fixed", height:"660px",width:"32.3%"}}>
         <div className='row'>
            <div className='col-10' style={{borderBottom:"0.5px solid #424242", paddingTop:"12px",height:"42px"}}>
               <p style={{fontSize:"1.01em", fontFamily:"sans-serif"}}>Search eg:infy,bse,nifty fut weekly ,gold mcx </p>
            </div>
            <div className='col-2' style={{borderBottom:"0.5px solid #424242", paddingTop:"12px",height:"42px"}}>
                 <p style={{ fontSize:"1.01em"}}> {watchlist.length}/50</p>
            </div>
         </div> 
         
        
         <ul className='list'>
         {watchlist.map((stock,index)=>{
            return(
              
               <WatchListItem stock={stock} key={index}/>
               
            )
            
         })}
             
         </ul>

         <DoughnutChart data={data}/>
         


         </div>
      </>
   );
}

export default WatchList;


const WatchListItem = ({stock}) =>{
   const [showWatchlistActions, setshowWatchlistActions]= useState(false);

   const handleMouseEnter = (e)=>{
      setshowWatchlistActions(true);
   }

   
   const handleMouseExit = (e)=>{
      setshowWatchlistActions(false);
   }

   return(
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} style={{listStyleType:"none"}}>
       
         <div className='watchlisthover' style={{display:"flex" , paddingTop:"30px", paddingBottom:"5px", justifyContent:"space-between", borderBottom:"1px solid lightgrey",cursor:"pointer"}}>
            <p className={stock.isDown ? "down" : "up"} style={{color: stock.isDown? "red" : "green"}}>{stock.name}</p>
            
            <div>
               <span className='percent'>{stock.percent}</span>
               {stock.isDown ?(<KeyboardArrowDown className="down" style={{color:"red"}}/>):(<KeyboardArrowUp className="down" style={{color:"red"}}/>)}
               <span className='price'>{stock.price}</span>
            </div>
         </div>
         {showWatchlistActions && <WatchListActions uid={stock.name}/>}
      </li>
         
   );
};



const WatchListActions = ({uid}) =>{
  return(
   <span>
      <span>
         <Tooltip title={"Buy (B)"} placement='top' arrow TransitionComponent={Grow}><button className='buy' style={{backgroundColor:"#387ed1" ,color:'white', height:'36px', width:"48px", borderRadius:'5px', border:"1px solid white" }}>Buy</button></Tooltip>
         <Tooltip title={"Sell (S)"} placement='top' arrow TransitionComponent={Grow}><button className='sell' style={{backgroundColor:"#ff4500" ,color:'white', height:'36px', width:"48px", borderRadius:'5px', border:"1px solid white" }}>Sell</button></Tooltip>

         <Tooltip title={"More"} placement='top' arrow TransitionComponent={Grow}><button style={{backgroundColor:"white" ,color:'gray', height:'36px', width:"48px", borderRadius:'5px', border:"1.5px solid lightgrey" }}><BarChartOutlined className='icon'/></button></Tooltip>
         <Tooltip title={"More"} placement='top' arrow TransitionComponent={Grow}><button style={{backgroundColor:"white" ,color:'gray', height:'36px', width:"48px", borderRadius:'5px', border:"1.5px solid lightgrey" }}><MoreHoriz className='icon'/></button></Tooltip>
      </span>
   </span>
  )

} 