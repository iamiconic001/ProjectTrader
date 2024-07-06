import React from "react";
function Hero() {
  return (
    <div className="container text-center" style={{ paddingBottom: "120px" }}>
      <h1
        style={{
          fontSize: "2.8em",
          lineHeight: "1.5",
          paddingTop: "110px",
        }}
      >
        Technology
      </h1>
      <p style={{ lineHeight: "1.65", fontSize: "1.35em" }}>
        Sleek, modern, and intuitive trading platforms
      </p>
      <p style={{ lineHeight: "1.65", fontSize: "1.15em" }}>
        Check out our{" "}
        <a href="" style={{ textDecoration: "none" }}>
          investment offerings →
        </a>
      </p>
    </div>
  );
}

export default Hero;
