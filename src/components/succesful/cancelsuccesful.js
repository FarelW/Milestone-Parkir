import './succesful.css'
import {useNavigate,useLocation} from 'react-router-dom';


function Succesful() {

    const location = useLocation();
    const { username } = location.state || {};
    const navigate=useNavigate()
    setTimeout(() => {
        navigate('/ticket',{ state: {username: username }})
      }, 5000);
    
    return (
        <div class="main-container">
            <div class="check-container">
                <div class="check-background">
                <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 25L27.3077 44L58.5 7" stroke="#FFF" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </div>
                <div class="check-shadow"></div>
            </div>
            <div className='succesful-title'>Payment Canceled</div>
            <button className='redirect-button' onClick={()=>navigate('/ticket',{ state: {username: username }})}>Go to My Ticket</button>
        </div>
    );
}

export default Succesful;