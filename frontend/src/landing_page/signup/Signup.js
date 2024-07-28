import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Signup = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    // Toggle showAlert state to true when button is clicked
    setShowAlert(true);

    // Optionally, you can reset showAlert after a certain time
    setTimeout(() => {
      setShowAlert(false);
    }, 7000); // Hide alert after 3 seconds (adjust as needed)
  };

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        
          `${process.env.REACT_APP_BACKEND_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="form_container text-center" style={{paddingTop:"80px", paddingBottom:"100px"}}>
        <h2 style={{paddingBottom:"40px"}}>Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" style={{paddingBottom:"20px", marginRight:"15px",fontSize:"1.25em"}}>Email</label>
            <input
              style={{
                color: "black",
                border: "2px solid black",
                borderRadius: "4px",
                fontSize:"1.01em",
                height: "40px",
                width: "300px",
              }}
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="email" style={{paddingBottom:"20px", marginRight:"15px",fontSize:"1.25em"}}>Username</label>
            <input
              style={{
                color: "black",
                border: "2px solid black",
                borderRadius: "4px",
                fontSize:"1.01em",
                height: "40px",
                width: "300px",
              }}
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor="password" style={{paddingBottom:"20px", marginRight:"15px",fontSize:"1.25em"}}>Password</label>
            <input
              style={{
                color: "black",
                border: "2px solid black",
                borderRadius: "4px",
                fontSize:"1.01em",
                
                height: "40px",
                width: "300px",
              }}
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <div style={{paddingBottom:"40px",paddingTop:"20px"}}>
            {showAlert && (
              <div className="alert alert-success" role="alert">
                Signup successfully done ! Now Please Login to your account !
              </div>
            )}
            <button style={{
                color: "white",
                border: "1px solid black",
                fontSize:"1.2em",
                borderRadius: "4px",
                backgroundColor: "blue",
                height: "40px",
                width: "80px",
              }} type="submit" onClick={handleClick}>
              Submit
            </button>
          </div>
          <span>
            Already have an account?{" "}
            <button
              style={{
                color: "white",
                border: "1px solid black",
                borderRadius: "4px",
                backgroundColor: "green",
                height: "35px",
                width: "70px",
              }}
            >
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "1.2em",
                  color: "white",
                }}
                to={"/login"}
              >
                Login
              </Link>{" "}
            </button>{" "}
            <button
              className="text-center"
              style={{
                color: "white",
                border: "1px solid black",
                borderRadius: "4px",
                backgroundColor: "green",
                height: "35px",
                width: "80px",
                marginLeft: "20px",
              }}
            >
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "1.2em",
                  color: "white",
                }}
                to={"/"}
              >
                {" "}
                Explore{" "}
              </Link>{" "}
            </button>
          </span>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Signup;
