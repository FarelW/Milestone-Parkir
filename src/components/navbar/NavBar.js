import './Navbar.css';
import { useState } from 'react';
import homepic from "./../../assets/Home.svg"
import settingspic from "./../../assets/logout.svg"
import tutorialpic from "./../../assets/menu.svg"
import helppic from "./../../assets/Help.svg"
import {useNavigate,useLocation} from 'react-router-dom';

const Navbar = ({username}) =>{
    const navigate = useNavigate()
    return(
        <div className='box'>
            <div className='nav' onClick={()=>navigate('/home',{ state: {username: username }})}>
                <div className='home'><img src={homepic}/></div>
                <div className='text'>Home</div>
            </div>
            <div className='nav' onClick={()=>navigate("/ticket",{ state: {username: username }})}>
                <div className='tutorial'><img src={tutorialpic}/></div>
                <div className='text'>MyTicket</div>
            </div>
            <div className='nav'>
                <div className='help'><img src={helppic}/></div>
                <div className='text'>Help</div>
            </div>
            <div className='nav' onClick={()=>navigate("/logout")}>
                <div className='setting'><img src={settingspic}/></div>
                <div className='text'>Logout</div>
            </div>
        </div>
    )
}

export default Navbar