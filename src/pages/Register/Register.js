import './Register.css';
import bglogin from "./../../assets/bglogin.png"
import visible from "./../../assets/visible.svg"
import invisible from "./../../assets/invisible.svg"
import { useState,useEffect } from "react"
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Verification from "./../../components/loading/Verification"

function Register(userdata) {
    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')
    const [isLoading, setIsLoading] = useState(false);

    const data=userdata

    const navigate = useNavigate()
    const signup_validation = (e) => {
        e.preventDefault()

        function addData(newData,url) {
            axios.post(url, newData)
                .then(response => {
                    console.log(response.data.message)
                    navigate('/home', { state: { username: username } })

                })
                .catch(error => {
                    console.error(error);
                });
        }

        let username_valid=true
        for(let i=0;i<data.length;i++){
          if (username===data[i].username){
            username_valid=false
          }
        }
        
        const newData = {
          name,
          username,
          phone,
          password,
          status:{},
          id: 1
        };
  
        if(username_valid===true){
            addData(newData,"https://parkir-api.vercel.app/data/user/")
            setIsLoading(true)
        }
        else{
            alert("Username telah digunakan")
        }
      }
    
    return (
        <div className='register-box' style={{backgroundImage:`url(${bglogin})`}}>
            <div className='register-title'>
                Register
            </div>
            <div className='login-label'>
                Create your new account
            </div>
            <div className="logpass">
                <form id="register-form" onSubmit={signup_validation}>
                    <div className="input">
                        <input type="text" required placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="input">
                        <input type="text" required placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="input">
                        <input type="number" required placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="input">
                        <input type="password" required placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='register-submit'>
                        <button type="submit" className='submit-button'>Sign up</button>
                    </div>
                    <div className='or'>
                        <div></div>
                        OR
                        <div id='ordiv'></div>
                    </div>
                    <div className="reg">
                        Already have an Account? 
                        <div onClick={() => window.location.href = '/login'}>log in</div>
                    </div>
                </form>
            </div>
            {isLoading && (<Verification/>)}
        </div>
    );
}

export default Register;