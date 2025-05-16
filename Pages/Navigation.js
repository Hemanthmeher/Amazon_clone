import React from "react";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";

function Navigation() {
    return (
        <nav className="nav">
            <div className="nav-left">
                <FaBars className="menu-icon" />
                <span>All</span>
            </div>
            <div className="nav-links">
                <span>MX Player</span>
                <span>Sell</span>
                <span>Bestsellers</span>
                <span>Today's Deals</span>
                <span>Mobiles</span>
                <span>Prime ▼</span>
                <span>Customer Service</span>
                <span>New Releases</span>
                <span>Electronics</span>
                <span>Fashion</span>
                <span>Amazon Pay</span>
                <span>Home & Kitchen</span>
                <span>Computers</span>
                <span>Books</span>
                <span>Car & Motorbike</span>
                <span>Toys & Games</span>
            </div>
        </nav>
    );
}

export default Navigation;
