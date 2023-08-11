import './Logout.css';
import bglogin from "./../../assets/bglogin.png"
import visible from "./../../assets/visible.svg"
import invisible from "./../../assets/invisible.svg"
import { useState,useEffect } from "react"
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    return (
        <div className='logout-box' style={{backgroundImage:`url(${bglogin})`}}>
            <div className='logout-title'>
                Are you sure<br/>want to logout?
            </div>
            <div className='button-logout'>
                <div>
                    <button type="submit" className='submit-logout' onClick={()=>navigate("/login")}>Logout</button>
                </div>
                <div>
                    <button type="submit" className='cancel-button'onClick={()=>navigate(-1)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Login;