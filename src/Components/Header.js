import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName, setbtnName] = useState("Login")
    const data = useContext(UserContext)
    console.log(data);
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header bg-green-300">
            <div className="logo-cantainer">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName == "Login" ? setbtnName("Logout") : setbtnName("Login")
                    }}>{btnName}</button>
                    <li className="px-4">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;