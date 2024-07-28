import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const { logout } = useAuth();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/login');
      }
      const { data } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}`, {}, { withCredentials: true });
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: 'top-right',
          })
        : (removeCookie('token'), navigate('/login'));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('isLoggedIn'); // Clear localStorage on logout
    navigate('/signup');
  };

  return (
    <>
      <div className='text-center' style={{paddingTop:"200px"}}>
        <h4 style={{paddingBottom:"20px", fontSize:"1.8em"}}>
         
          Want to logout ? <span>{username}</span>
        </h4>
        <button className='btn btn-danger' onClick={handleLogout}>LOGOUT</button>
        
      </div>
      <ToastContainer />
    </>
  );
};

export default Logout;





// import React from 'react';
// import { useEffect, useState } from "react";
// import { Link , useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import Navbar from '../Navbar';
// import Footer from '../Footer';



// function Logout() {

   


//     const navigate = useNavigate();
//     const [cookies, removeCookie] = useCookies([]);
//     const [username, setUsername] = useState("");
    
//     useEffect(() => {
//       const verifyCookie = async () => {
//         if (!cookies.token) {
//           navigate("/login");
//         }
//         const { data } = await axios.post(
//           "http://localhost:3002",
//           {},
//           { withCredentials: true }
//         );
//         const { status, user } = data;
//         setUsername(user);
//         return status
//           ? toast(`Hello ${user}`, {
//               position: "top-right",
//             })
//           : (removeCookie("token"), navigate("/login"));
//       };
//       verifyCookie();
//     }, [cookies, navigate, removeCookie]);
//     const Logout = () => {
//       removeCookie("token");
//       navigate("/signup");
//     };

    

//     return (<>
//         <Navbar/>
//         <Footer/>
//     </>);
// }

// export default Logout;



