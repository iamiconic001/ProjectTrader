import React from 'react';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import Hero from './Hero.js';
import CreateTicket from "./CreateTicket.js";

function SupportPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <CreateTicket/>
        <Footer/>
        </>
     );
}

export default SupportPage;