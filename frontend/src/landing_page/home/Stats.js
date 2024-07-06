import React from "react";
function Stats() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="mb-5" style={{ fontSize: "35px" }}>
            Trust with confidence
          </h1>

          <h2 style={{ fontSize: "27px", fontWeight: "normal" }}>
            Customer-first always
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "2" }}>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 style={{ fontSize: "27px", fontWeight: "normal" }}>
            No spam or gimmicks
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "2" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 style={{ fontSize: "27px", fontWeight: "normal" }}>
            The Zerodha universe
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "2" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 style={{ fontSize: "27px", fontWeight: "normal" }}>
            Do better with money
          </h2>
          <p style={{ fontSize: "17px", lineHeight: "2" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "95%", marginLeft: "20px" }}
          ></img>
          <div className="text-center">
            <a
              style={{
                marginRight: "20px",
                fontWeight: "normal",
                fontSize: "1.1em",
              }}
              href="#"
            >
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              style={{
                marginLeft: "20px",
                fontWeight: "normal",
                fontSize: "1.1em",
              }}
              href="#"
            >
              Try Kite Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
