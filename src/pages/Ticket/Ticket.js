import './Ticket.css';
import { useState } from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import NavBar from './../../components/navbar/NavBar';

function Ticket({userdata,park}) {
    const location = useLocation();
    const { username } = location.state || {}

    let status
    for(let i=0;i<userdata.length;i++){
        if (username===userdata[i].username){
            status=userdata[i].status
        }
      }


    if (username){
        return(
            <div>
                <NavBar username={username}/>
                <div className=''>{status.place}</div>
            </div>
        )
    }
    else{
        window.location.href="/login"
    }
}

export default Ticket;
