import React from 'react';
import Summary from './Summary.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WatchList from './WatchList';
import Orders from "./Orders.js";
import Holdings from "./Holdings.js";
import Positions from "./Positions.js";
import Funds from "./Funds.js";
import Apps from "./Apps.js";

function Dashboard() {
    return ( 
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4 border'>
                        <WatchList/>
                    </div>
                    <div className='col-8'>
                    <Routes>
                        <Route exact path='/' element={<Summary/>} />
                        <Route path='/orders' element={<Orders/>} />
                        <Route path='/holdings' element={<Holdings/>} />
                        <Route path='/positions' element={<Positions/>} />
                        <Route path='/funds' element={<Funds/>} />
                        <Route path='/apps' element={<Apps/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Dashboard;