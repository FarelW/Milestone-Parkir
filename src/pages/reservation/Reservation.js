import { updateData } from "../../util/updateData";
import Home from "../home/Home";
import './Reservation.css';
import { useState } from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import axios from "axios";
import Verification from "./../../components/loading/Verification"

function Reservation({userdata}) {
  const location = useLocation();
  const { parkData,username } = location.state || {};
  const [time,editTime]=useState()
  const [isLoading, setIsLoading] = useState(false);

  function updateData (newData, url, id) {
    axios.put(url+"/"+id, newData)
        .then(response => {
            console.log(response.data.message); // Response message from the API
            navigate('/succesful',{ state: {username: username }});
        })
        .catch(error => {
            console.error(error);
    });
}

  const navigate = useNavigate();
  if (parkData){
    let id_now
    var price = parkData.price;
    const navigateToPayment = () => {

      let updatedData={
        status:{
          place:parkData.name,
          time,
          id:parkData.id,
          checked:false
        }
      }

      for(let i=0;i<userdata.length;i++){
        if (username===userdata[i].username){
          id_now=userdata[i].id
        }
      }

      updateData(updatedData,"https://parkir-api.vercel.app/data/user",id_now)
      setIsLoading(true)
    }
    function checkState() {
      if ((document.getElementById('myRadio1').checked)||(document.getElementById('myRadio2').checked)||(document.getElementById('myRadio2').checked)
      ||(document.getElementById('myRadio3').checked)||(document.getElementById('myRadio4').checked)||(document.getElementById('myRadio5').checked)
      ||(document.getElementById('myRadio6').checked)) {
          navigateToPayment()
      }
    }

    return (
      <div>
        <div className="profilebox">
          <div className="profile-img"><img className="profile"/></div>
          <div><input className="search" type="text" placeholder="Search"></input></div>
        </div>

        <div className='reservation-box'>
          <div className="reservation-title">{parkData.name}</div>
          <section className='Description'>
            <div className='desc-left'>
              <img src={parkData.url_img}></img>
            </div>
            <div className='desc-right'>
              <div className='description-title'>Deskripsi</div>
              <p>{parkData.desc}</p>
              <div className='description-title'>Location</div>
              <p>{parkData.location}</p>
            </div>
          </section>

          <section className="Reservation">
            <div className="arrival-title">Arrival Time</div>
            <div className='reservation-time'>
              <div className='radio'>
                <input className='radio__input' type="radio" value="06:00 - 08:00" name="myRadio" id="myRadio1" onClick={(e)=>editTime(e.target.value)}></input>
                <label className='radio__label' for="myRadio1">06:00 - 08:00</label>
                <input className='radio__input' type="radio" value="08:00 - 10:00" name="myRadio" id="myRadio2" onClick={(e)=>editTime(e.target.value)}></input>
                <label className='radio__label' for="myRadio2">08:00 - 10:00</label>
                <input className='radio__input' type="radio" value="10:00 - 12:00" name="myRadio" id="myRadio3" onClick={(e)=>editTime(e.target.value)}></input>
                <label className='radio__label' for="myRadio3">10:00 - 12:00</label>
              </div>
            </div>
            <div className='reservation-time'>
              <div className='radio'>
                <input className='radio__input' type="radio" value="12:00 - 14:00" name="myRadio" id="myRadio4" onClick={(e)=>editTime(e.target.value)}></input>
                <label className='radio__label' for="myRadio4">12:00 - 14:00</label>
                <input className='radio__input' type="radio" value="14:00 - 16:00" name="myRadio" id="myRadio5" onClick={(e)=>editTime(e.target.value)}></input>
                <label className='radio__label' for="myRadio5">14:00 - 16:00</label>
                <input className='radio__input' type="radio" value="16:00 - 18:00" name="myRadio" id="myRadio6" onClick={(e)=>editTime(e.target.value)}></input>
                <label className='radio__label' for="myRadio6">16:00 - 18:00</label>
              </div>
            </div>
          </section>

          <section className='Details'>
            <div className='details-attribute'>
              <div>
                <p>Price</p>
                <p><b>Rp{price}</b></p>
              </div>
            </div>
            <button className='book-button' onClick={checkState}>Book Now</button>
          </section>
        </div>
        {isLoading && (<Verification/>)}
      </div>
    )
  }
  else{
    navigate("/login")
  }
}

export default Reservation;
