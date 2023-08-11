import './Ticket.css'
import { useEffect, useState } from 'react'
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import NavBar from './../../components/navbar/NavBar'
import Loading from '../../components/loading/Loading'
import Verification from '../../components/loading/Verification'
import axios from "axios"


function Ticket({userdata,park}) {
    const location = useLocation()
    const { username } = location.state || {}

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [checkin,ischecked]=useState()

    useEffect(() => {
        if (userdata!==undefined){
            const user = userdata.find(user => user.username === username)
            ischecked(user.status.checked)
        }
      }, [userdata]);

    if (username){
        if (userdata && park){
            let status
            let user_id
            for(let i=0;i<userdata.length;i++){
                if (username===userdata[i].username){
                    status=userdata[i].status
                    user_id=i
                    break
                }
            }

            let park_id
            for(let i=0;i<park.length;i++){
                if (status.place===park[i].name){
                    park_id=i
                    break
                }
            }

            function updateData(newData, url, id) {
                return new Promise((resolve, reject) => {
                    axios.put(url + "/" + id, newData)
                        .then(response => {
                            console.log(response.data.message);
                            setIsLoading(false);
                            resolve(); // Resolve the promise to indicate a successful update
                        })
                        .catch(error => {
                            console.error(error);
                            reject(error); // Reject the promise with the error
                        });
                });
            }

            function handlecheckin() {
                ischecked(true);
                
                if (park[park_id].bike > 0) {
                    setIsLoading(true);
                    updateData({status:{...status,checked:true}},"https://parkir-api.vercel.app/data/user",(user_id+1))
                    updateData({ bike: (park[park_id].bike - 1) }, "https://parkir-api.vercel.app/data/park", (park_id + 1))
                        .then(() => {
                            navigate('/succesful2', { state: { username: username } });
                        })
                } else {
                    alert("Parkir penuh");
                }
            }
            

            function handlecancel(){
                setIsLoading(true)
                updateData({status:{}},"https://parkir-api.vercel.app/data/user",(user_id+1))
                    .then(()=>{
                        navigate('/succesful1', { state: { username: username } })
                    })
            }

            function handlecheckout(){
                ischecked(false)
                setIsLoading(true)
                updateData({bike:(park[park_id].bike+1)},"https://parkir-api.vercel.app/data/park",(park_id+1))
                updateData({status:{}},"https://parkir-api.vercel.app/data/user",(user_id+1))
                    .then(()=>{
                        navigate('/succesful3', { state: { username: username } })
                    })
            }

            function crowd(car,bike){
                if (car>50 || bike>50){
                    return "#00D22E"
                }
                else if ((car<=50 && car>10) || (bike<=50 && bike>10)){
                    return "#F5DC00"
                }
                else{
                    return "#F50000"
                }
            }

            if (park_id!==undefined){
                return(
                    <div className='ticket-container'>
                        <NavBar username={username}/>
                        <div className='ticket-title'>{park[park_id].name}</div>
                        <div className='ticket-tes'>
                            <img className='ticket-img' src={park[park_id].url_img}></img>
                            <span className='ticket-desc'>{park[park_id].desc}</span>
                        </div>
                        <div className='ticket-info' style={{backgroundColor: crowd(park[park_id].car,park[park_id].bike)}}>
                            {/* <div>Time <span>: {status.time}</span></div>
                            <div>Car <span>: {park[park_id].car}</span></div>
                            <div>Bike <span>: {park[park_id].bike}</span></div>
                            <div className='ticket-price'>Price<span>: Rp.{park[park_id].price}</span></div> */}
                            <div>
                                <div>Time</div>
                                <div>Car</div>
                                <div>Bike</div>
                                <div>Price</div>
                            </div>
                            <div>
                                <div>: {status.time}</div>
                                <div>: {park[park_id].car}</div>
                                <div>: {park[park_id].bike}</div>
                                <div>: Rp.{park[park_id].price}</div>
                            </div>
                        </div>
                        {!checkin && (
                            <div className='ticket-checkin'>
                                <button className='ticket-button' onClick={handlecheckin}>Check in</button>
                                <button className='ticket-button cancel' onClick={handlecancel}>Cancel Booking</button>
                            </div>
                        )}
                        {checkin && <button className='ticket-button' onClick={handlecheckout}>Check out</button>}
                        {isLoading && (<Verification/>)}
                        {/* <Verification/> */}
                    </div>
                )
            }
            else{
                return(
                    <div className='ticket-container'>
                        <NavBar username={username}/>
                        <div className='no-ticket'>You have not book any ticket yet :&#40;</div>
                    </div>
                )
            }
        
        }
        else{
            return(
                <div >
                    <NavBar username={username}/>
                    <Loading/>
                </div>
            )
        }
    }
    else{
        window.location.href="/login"
    }
}

export default Ticket;
