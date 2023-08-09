import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../../pages/home/Home";
import { Admin, Reservation } from "../../pages";
import Landingpage from "./../../pages/Landingpage/Landingpage"
import Login from "../../pages/Login/Login"
import Register from "./../../pages/Register/Register"
import Logout from "../../pages/Logout/Logout"
import Succesful from "../../components/succesful/succesful"
import Ticket from "../../pages/Ticket/Ticket";

const Routess = () => {
    const [userdata,setuserdata]=useState()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://parkir-api.vercel.app/data/user');
            const jsonData = await response.json();
            setuserdata(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
        const interval = setInterval(fetchData, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <Router>
            <Routes>
                <Route path="*" element={<Landingpage />} />
                <Route path="/login" element={<Login userdata={userdata}/>} />
                <Route path="/register" element={<Register userdata={userdata}/>} />
                <Route path="/logout" element={<Logout userdata={userdata}/>} />
                <Route path="/reservation" element={<Reservation userdata={userdata}/>} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/home" element={<Home userdata={userdata}/>} />
                <Route path="/ticket" element={<Ticket userdata={userdata}/>} />
                <Route path="/succesful" element={<Succesful />} />
            </Routes>
        </Router>
    )
}

export default Routess;