import React from "react";
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore}) {
  return (
    <div className="container mt-5 p-5" style={{ paddingBottom: "20px", marginLeft:"13%",paddingRight:"50px" }}>
      <div className="row" p-5>
        <div className="col-6">
          <img
            src={imageURL}
            alt="Education Image Varsity"
            style={{ width: "90%", marginLeft: "0px" }}
          ></img>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h2 className="mb-5" style={{ fontSize: "38px" }}>
          {productName}
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "2" }}>
          {productDescription}
          </p>
          <a
            style={{
              fontWeight: "normal",
              fontSize: "1.1em",
              textDecoration:"none"
              
            }}
            href="#"
          >
            {tryDemo}  <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a
            style={{
              fontWeight: "normal",
              fontSize: "1.1em",
              marginLeft:"1.8em",
              textDecoration:"none"
            }}
            href="#"
          >
            {learnMore}   <i class="fa-solid fa-arrow-right"></i>
          </a>
          <br/>
          <img src="media/images/google-play-badge.svg" alt="google play image" style={{padding:"20px"}}></img>
          <img src="media/images/appstore-badge.svg" alt="appstore image" style={{padding:"20px"}}></img>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
