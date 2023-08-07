import './Login.css';
import bglogin from "./../../assets/bglogin.png"
import visible from "./../../assets/visible.svg"
import invisible from "./../../assets/invisible.svg"
import { useState,useEffect } from "react"
import {useNavigate} from 'react-router-dom';

function Login(userdata) {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const data=userdata.userdata

    const navigate = useNavigate()
    const login_validation = (e) =>{
        e.preventDefault()
        let username_valid=false
        let password_valid=false

        for(let i=0;i<data.length;i++){
          if (username===data[i].username){
            username_valid=true
            if (password===data[i].password){
                password_valid=true
            }
          }
        }

        if(username_valid===true){
            if(password_valid===true){
                navigate('/home', { state: { username: username } })
            }
            else{
                alert("akun tidak ditemukan")
            }
        }
        else{
            alert("akun tidak ditemukan")
        }
      }

    return (
        <div className='login-box' style={{backgroundImage:`url(${bglogin})`}}>
            <div className='login-title'>
                Welcome
            </div>
            <div className='login-label'>
                Login to your account
            </div>
            <div className="logpass">
                <form id="login-form" onSubmit={login_validation}>
                    <div className="input">
                        <input type="text" required placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="input">
                        <input type="password" required placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='login-submit'>
                        <button type="submit" className='submit-button'>Login</button>
                    </div>
                    <div className='or'>
                        <div></div>
                        OR
                        <div id='ordiv'></div>
                    </div>
                    <div className="reg">
                        Don't have an account? 
                        <div onClick={() => window.location.href = '/register'}>Create Account</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;