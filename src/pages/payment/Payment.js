import { useEffect, useState } from "react"
import "./Payment.css"
import Loading from "../../components/loading/Loading";
import Navbar from './../../components/navbar/NavBar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Balance from './../../assets/img.png';

function Payment() {
    const navigate = useNavigate();
    const navigateToPayment = () => {
    navigate('./../../home/'); }
    function checkState() {
        if ((document.getElementById('myRadio1').checked)) {
            navigateToPayment()
        } else {
            // call other function
        }
    }
  
    return (
      <main>
        <section className='Description'>
            <img src={Balance} className="balance" style={{width:"9cm",height:"6cm",margin:"auto"}}></img>
        </section>
  
        <section className="Reservation">
          <h2>Payment method</h2>
          <div className='reservation-time' style={{marginTop:"50px"}}>
            <div>
              <label className='container' for="myRadio1">BalancePaye 
                <input type="radio" value="option1" name="myRadio" id="myRadio1"></input>
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className='reservation-time'>
            <div>
                <label className='container' for="myRadio2">Credit Card (Unavailable)
                    <input type="radio" value="option2" name="myRadio" id="myRadio2"></input>
                    <span className="checkmark"></span>
                </label>
                </div>
            </div>
          <div className='reservation-time'>
            <div>
                <label className='container' for="myRadio3">Add Other options (Unavailable)
                    <input type="radio" value="option3" name="myRadio" id="myRadio3"></input>
                    <span className="checkmark"></span>
                </label>
                </div>
            </div>
        </section>
  
        <section className='Details'>
          <button className='button' onClick={checkState}>Pay</button>
          <div>
            <p></p>
          </div>
        </section>
      </main>
    );
  }
  
export default Payment;