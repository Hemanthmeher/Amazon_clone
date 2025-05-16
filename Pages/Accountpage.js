import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaUserShield, FaAmazon, FaCreditCard, FaGift, FaHome, FaClipboardList, FaHeadset, FaEnvelope, FaHistory, FaUsersCog } from "react-icons/fa";
import axios from "axios";
import "./Accountpage.css";

const accountOptions = [
  { title: "Your Wishlist", description: "View and manage your wishlist", icon: <FaHeart />, link: "/wishlist" },
  { title: "Login & Security", description: "Change email, password & phone", icon: <FaUserShield /> },
  { title: "Prime", description: "View benefits and manage membership", icon: <FaAmazon /> },
  { title: "Your Payments", description: "Manage payment methods and settings, view all transactions", icon: <FaCreditCard /> },
  { title: "Gift Cards", description: "Redeem or reload gift cards", icon: <FaGift /> },
  { title: "Your Addresses", description: "Edit or add address details", icon: <FaHome /> },
  { title: "Your Lists", description: "View, modify, and share lists", icon: <FaClipboardList /> },
  { title: "Customer Service", description: "Browse help articles or contact us", icon: <FaHeadset /> },
  { title: "Your Messages", description: "View messages from Amazon", icon: <FaEnvelope /> },
  { title: "Archived Orders", description: "View and manage archived orders", icon: <FaHistory /> },
  { title: "Your Amazon Family", description: "Manage profiles and permissions", icon: <FaUsersCog /> },
];

const Accountpage = () => {
  const user_id = localStorage.getItem("user_id");
  const [userdata, setUserdata] = useState(null);

  const Accountdata = async () => {
    const data = new FormData();
    data.append("user_id", user_id);
    const response = await axios.post("https://amazon.indianhackerslab.com/get-account.php", data, { headers: { 'content-type': 'multipart/form-data' } });
    if (response && response.data.status === "success") {
      setUserdata(response.data.data[0]);
    }
  };

  useEffect(() => {
    Accountdata();
  }, [user_id]);

  return (
    <div className="account-container">
      <div className="header">
        <h2>Your Account</h2>
        <Link to="/home" className="back-button">Back</Link>
      </div>
      <div className="account-grid">
        {accountOptions.map((option, index) => (
          <Link to={option.link || "#"} key={index} className="account-card">
            <div className="icon">{option.icon}</div>
            <div className="text-content">
              <h4>{option.title}</h4>
              <p>{option.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accountpage;