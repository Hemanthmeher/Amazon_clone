import { useState } from "react";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = () => {
    // 8 Laptops & Mobiles from Your Amazon Links
    const [wishlistItems, setWishlistItems] = useState([
        { id: 1, name: "iPhone SE", price: "₹44,999", image: "https://m.media-amazon.com/images/I/61SKi94cImL._AC_UY327_FMwebp_QL65_.jpg" },
        { id: 2, name: "OnePlus Nord", price: "₹28,499", image: "https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg" },
        { id: 3, name: "Samsung Galaxy M13", price: "₹13,999", image: "https://m.media-amazon.com/images/I/61Ony8rgwEL._AC_UL480_FMwebp_QL65_.jpg" },
        { id: 4, name: "iPhone 12", price: "₹53,999", image: "https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY327_FMwebp_QL65_.jpg" },
        { id: 5, name: "MacBook Air M2", price: "₹98,990", image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._AC_UY327_FMwebp_QL65_.jpg" },
        { id: 6, name: "ASUS VivoBook", price: "₹42,999", image: "https://m.media-amazon.com/images/I/61JEULUT8QL._AC_UY327_FMwebp_QL65_.jpg" },
        { id: 7, name: "Lenovo Legion", price: "₹1,29,999", image: "https://m.media-amazon.com/images/I/718zbAOG7HL._AC_UY327_FMwebp_QL65_.jpg" },
        { id: 8, name: "HP Pavilion", price: "₹79,999", image: "https://m.media-amazon.com/images/I/71eXNIDUGjL._AC_UY327_FMwebp_QL65_.jpg" }
    ]);

    // Remove Single Item from Wishlist
    const removeFromWishlist = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <div className="wishlist-container">
            <h2>Your Wishlist💗</h2>

            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="wishlist-grid">
                    {wishlistItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="wishlist-item"
                            onMouseEnter={(e) => e.currentTarget.querySelector(".remove-button").style.display = "block"}
                            onMouseLeave={(e) => e.currentTarget.querySelector(".remove-button").style.display = "none"}
                        >
                            <img src={item.image} alt={item.name} className="wishlist-image" />
                            <h4>{item.name}</h4>
                            <p className="price">{item.price}</p>
                            <button className="remove-button" onClick={() => removeFromWishlist(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}

            {/* Buttons Section */}
            <div className="wishlist-buttons">
                <Link to="/product" className="add-button">Products Page</Link>
                <Link to="/homes" className="home-button">Go to Home</Link>
            </div>
        </div>
    );
};

export default Wishlist;
