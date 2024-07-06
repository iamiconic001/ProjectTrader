import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from '../AuthContext.js';
import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { login } = useAuth(); // Use login function from the context

  const handleClick = () => {
    // Toggle showAlert state to true when button is clicked
    setShowAlert(true);

    // Optionally, you can reset showAlert after a certain time
    setTimeout(() => {
      setShowAlert(false);
    }, 10000); // Hide alert after 100 seconds (adjust as needed)
  };

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Email value:', inputValue.email);
      console.log('Password value:', inputValue.password);
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { ...inputValue },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        login(); // Set login state to true on successful login
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error(error);
      handleError("An unexpected error occurred.");
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="form_container text-center" style={{paddingTop:"80px", paddingBottom:"100px"}}>
        <h2 style={{paddingBottom:"40px"}}>Login Account</h2>
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
                Login Successful , Please Explore our Zerodha !{" "}
                <button
                  className="text-center"
                  style={{
                    color: "white",
                    border: "1px solid black",
                    borderRadius: "4px",
                    backgroundColor: "green",
                    height: "40px",
                    width: "80px",
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
                height: "40px",
                width: "80px",
              }}
            >
              {" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "1.2em",
                  color: "white",
                }}
                to={"/signup"}
              >
                Signup
              </Link>{" "}
            </button>
            <button
              className="text-center"
              style={{
                color: "white",
                border: "1px solid black",
                borderRadius: "4px",
                backgroundColor: "green",
                height: "40px",
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

export default Login;



