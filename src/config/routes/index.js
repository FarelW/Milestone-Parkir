import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../../pages/home/Home";
import { Admin, Reservation } from "../../pages";
import Landingpage from "./../../pages/Landingpage/Landingpage"
import Login from "../../pages/Login/Login"
import Register from "./../../pages/Register/Register"

const Routess = () => {
    const [userdata,setuserdata]=useState()

    useEffect(() => {
        fetch('https://parkir-api.vercel.app/data/user')
            .then(response => response.json())
            .then(data => {
                setuserdata(data)
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="*" element={<Landingpage />} />
                <Route path="/login" element={<Login userdata={userdata}/>} />
                <Route path="/register" element={<Register userdata={userdata}/>} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/home" element={<Home />} />
                
            </Routes>
        </Router>
    )
}

export default Routess;