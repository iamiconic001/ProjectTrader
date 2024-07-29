import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () =>{


  const redirectToPage = (event) => {

  
    console.log("Clicked");
    event.preventDefault();
    // Replace 'https://www.example.com' with the URL you want to redirect to
    window.location.href = "https://projecttrader-frontend.onrender.com/";
  };

    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropdownOpen ,setIsProfileDropdownOpen]=useState(false);

    const handleMenuClick = (index) =>{
        setSelectedMenu(index);
    };
    
    
    // const handleProfileClick = (index) =>{
    //     setIsProfileDropdownOpen(!isProfileDropdownOpen);
    // }

  return (
    <>
      <img
        src="media\images\logo.png"
        alt="logo"
        style={{
          width: "3%",
          height: "35%",
          marginTop: "25px",
          marginRight: "200px",
        }}
      ></img>
      <div className="text-center" style={{ paddingTop: "20px" }}>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "black",
            padding: "17px",
            fontWeight: "normal",
          }}
          onClick={() => handleMenuClick(0)}
        >
          Dashboard
        </Link>
        <Link
          to={"/orders"}
          style={{
            textDecoration: "none",
            color: "black",
            padding: "17px",
          }}
          onClick={() => handleMenuClick(1)}
        >
          Orders
        </Link>
        <Link
          to={"/holdings"}
          style={{
            textDecoration: "none",
            color: "black",
            padding: "17px",
          }}
          onClick={() => handleMenuClick(2)}
        >
          Holdings
        </Link>
        <Link
          to={"/positions"}
          style={{
            textDecoration: "none",
            color: "black",
            padding: "17px",
          }}
          onClick={() => handleMenuClick(3)}
        >
          Positions
        </Link>
        <Link
          to={"/funds"}
          style={{
            textDecoration: "none",
            color: "black",
            padding: "17px",
          }}
          onClick={() => handleMenuClick(4)}
        >
          Funds
        </Link>
        <Link
          to={"/apps"}
          style={{
            textDecoration: "none",
            color: "black",
            padding: "17px",
          }}
          onClick={() => handleMenuClick(5)}
        >
          Apps
        </Link>
        <div className="btn-group" onClick={redirectToPage}>
  <button style={{marginLeft:"10px"}} type="button" className="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false">
   Go to HomePage
  </button>
  
  
  
</div>
      </div>
    </>
  );
}

export default Menu;
