import './Landingpage.css';
import logo from './../../assets/Logo ITBPark.jpg';
import arrow from "./../../assets/ep_arrow-right-bold.svg"

function Landingpage() {

    return (
        <div>
            <div className='land'>
                <div>
                    <img src={logo} className="logo"/>
                </div>
                <div className='title'>
                    ITBPark
                </div>
                <div className='title-label'>
                    Reserve your parking hassel-free with our <br/>advanced reservation system
                </div>
                <div>
                    <button className="start" onClick={() => window.location.href = '/login'}>Explore Now<span><img src={arrow}/></span></button>
                </div>
            </div>
        </div>
    );
}

export default Landingpage;
