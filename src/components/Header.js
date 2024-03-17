import logo from './logo.jpg';
import shoppingcart from './shoppingcart.webp'
import { useState,useEffect } from 'react';
import React from 'react';
import '../App.css';



const Prev = (currentValue) => !currentValue;






const Dropdownmenu = (hellos) =>{

if(hellos == true) {

    return (
        <div className="dropdown">
            <ul style={{listStyleType: 'none'}} className="menu">
                <li className="homebutton" >Home</li>
                <li className="reservationbutton">Reservation</li>

            </ul>
        </div>
    )

}
else if(hellos == false){
    return(null)


}


}

const Header = ()=>{
    const [openprofile, setdropdown] = useState(false);

    return (
        <header className="head">
            <dropdownmenu/>

            <div className="centerlogo"><img src={logo} alt="Logo" className="logo"/></div>
            <div className="shoppingcartcontainer"><img src={shoppingcart} alt="shoppingcart" className="shoppingcart"/></div>
            <p>{Dropdownmenu(openprofile)}</p>

            <label className="newlabel">
                <input type="checkbox"
                       onClick={() => setdropdown(Prev(openprofile))}/>
            </label>
            <p>{openprofile}</p>
        </header>
    )
}
export default Header;