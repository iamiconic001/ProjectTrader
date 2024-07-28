import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext.js'; // Import useAuth from the context

function Navbar() {
  const { isLoggedIn, logout } = useAuth(); // Use isLoggedIn from the context

  const handleLogout = () => {
    logout(); // Call logout function from AuthContext
  };

  const redirectToPage = (event) => {
    console.log("Clicked");
    event.preventDefault();
    
    window.location.href = "https://main.d2awmwkioobrf.amplifyapp.com/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img style={{ width: "25%" }} src="media/images/logo.svg" alt="logo"></img>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-2 mb-lg-0">
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/signup"}
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/support"}>
                  Support
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to={"/logout"}
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={redirectToPage}
                      style={{
                        height: "35px",
                        marginLeft: "70px",
                        marginTop: "2px",
                        height: "40px",
                        width: "70px",
                        fontSize: "1.2em",
                      }}
                      className="btn btn-danger"
                    >
                      Kite
                    </button>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


