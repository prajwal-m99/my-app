import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header = () => {



const [btnName, setBtnName] = useState("Login");


    return (
        <div className="header">


            <div className="logo">
                <img
                    alt="logo"
                    src={LOGO_URL}
                />
            </div>

            <div className="headerText">
                <h1>Food Villa</h1>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        setBtnName(btnName==="Login"?"Logout":"Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header;