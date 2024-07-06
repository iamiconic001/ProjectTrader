import React from "react";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
import Hero from "./Hero";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import Universe from "./Universe.js";
function ProductPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LeftSection
        imageURL={"media/images/products-kite.png"}
        productName={"Kite"}
        productDescription={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={"Try demo"}
        learnMore={"Learn more"}
      />
      <RightSection
        imageURL={"media/images/products-console.png"}
        productName={"Console"}
        productDescription={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        tryDemo={"Try demo"}
        learnMore={"Learn more"}
      />
      <LeftSection
        imageURL={"media/images/products-coin.png"}
        productName={"Coin"}
        productDescription={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={"Coin"}
        learnMore={"Learn more"}
      />
      <RightSection
        imageURL={"media/images/products-kiteconnect.png"}
        productName={"Kite Connect API"}
        productDescription={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        tryDemo={"Kite connect"}
        learnMore={"Learn more"}
      />
      <LeftSection
        imageURL={"media/images/varsity-products.png"}
        productName={"Varsity mobile"}
        productDescription={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        tryDemo={"Varsity"}
        learnMore={"Learn more"}
      />
      <div className="row text-center mt-5">
        <h3 style={{ fontSize: "25px", fontWeight: "normal" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a
            style={{
              fontSize: "1.1em",
              color: "blue",
              opacity: "0.65",
              textDecoration: "none",
            }}
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </h3>
      </div>
      <Universe />
      <Footer />
    </>
  );
}

export default ProductPage;
