import React from "react";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import Hero from "./Hero.js";
import Brokerage from "./Brokerage.js";
import OpenAccount from "../OpenAccount.js";

function PricingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OpenAccount />
      <Brokerage />
      <Footer />
    </>
  );
}

export default PricingPage;
