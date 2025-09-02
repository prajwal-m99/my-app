import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {



const [btnName, setBtnName] = useState("Login");
const navigate = useNavigate();



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
                    <li onClick={()=> navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>About Us</li>
                    <li onClick={() => navigate("/contact")}>Contact Us</li>
                    <li onClick={()=> navigate("/cart")}>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        setBtnName(btnName==="Login"?"Logout":"Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header;