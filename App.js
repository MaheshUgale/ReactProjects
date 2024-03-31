import React from "react";
import ReactDOM from "react-dom"


const Header = () => {
    return (
        <div className="header">
            <div className="logo-cantainer">
                <img className="logo" src="https://as2.ftcdn.net/v2/jpg/06/62/27/35/1000_F_662273587_FUApAaMvV1hBiKXTXbWaxbhCmKI1p6QX.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestorantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <div>
                <img className="cardImg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/akbvvc2wh0wgei00vax4" />
            </div>
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minuts</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestorantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

