import Home from "../home/Home";
import './Reservation.css';
import { useState } from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';

function Reservation() {
  const location = useLocation();
  const { parkData } = location.state || {};

  console.log('Park data:', parkData);

  var price = parkData.price;
  const navigate = useNavigate();
  const navigateToPayment = () => {
    navigate('./../../payment/'); }
  function checkState() {
    if ((document.getElementById('myRadio1').checked)||(document.getElementById('myRadio2').checked)||(document.getElementById('myRadio2').checked)
    ||(document.getElementById('myRadio3').checked)||(document.getElementById('myRadio4').checked)||(document.getElementById('myRadio5').checked)
    ||(document.getElementById('myRadio6').checked)) {
        navigateToPayment()
    } else {
        // call other function
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
              <input className='radio__input' type="radio" value="option1" name="myRadio" id="myRadio1"></input>
              <label className='radio__label' for="myRadio1">06:00 - 08:00</label>
              <input className='radio__input' type="radio" value="option2" name="myRadio" id="myRadio2"></input>
              <label className='radio__label' for="myRadio2">08:00 - 10:00</label>
              <input className='radio__input' type="radio" value="option3" name="myRadio" id="myRadio3"></input>
              <label className='radio__label' for="myRadio3">10:00 - 12:00</label>
            </div>
          </div>
          <div className='reservation-time'>
            <div className='radio'>
              <input className='radio__input' type="radio" value="option4" name="myRadio" id="myRadio4"></input>
              <label className='radio__label' for="myRadio4">12:00 - 14:00</label>
              <input className='radio__input' type="radio" value="option5" name="myRadio" id="myRadio5"></input>
              <label className='radio__label' for="myRadio5">14:00 - 16:00</label>
              <input className='radio__input' type="radio" value="option6" name="myRadio" id="myRadio6"></input>
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
    </div>
  );
}

export default Reservation;
