import { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import Usercontext from "../Usercontext";
import { Link } from "react-router-dom";
import "./Cartpage.css"; // Import the updated CSS

const Cartpage = () => {
    const userdata = useContext(Usercontext);
    const [cartitems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch Cart Items
    const GetCartItems = useCallback(async () => {
        const user_id = localStorage.getItem("user_id");

        if (!user_id) {
            console.warn("User not logged in. Skipping cart fetch.");
            setLoading(false);
            return;
        }

        const data = new FormData();
        data.append("user_id", user_id);

        try {
            const response = await axios.post(
                "https://amazon.indianhackerslab.com/get-carts.php",
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            console.log("Cart API Response:", response.data);

            if (response.data && response.data.data) {
                setCartItems(response.data.data);
            } else {
                setCartItems([]);
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    // ✅ Remove Item from Cart
    const RemoveCartItem = async (product_id) => {
        const user_id = localStorage.getItem("user_id");
    
        if (!user_id) {
            alert("Please log in to remove items from the cart.");
            return;
        }
    
        const data = new FormData();
        data.append("user_id", user_id);
        data.append("product_id", product_id);
    
        try {
            const response = await axios.post(
                "https://amazon.indianhackerslab.com/remove-cart.php",
                data,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
    
            console.log("Remove API Response:", response.data);
    
            if (response.data.status === "success") {
                alert("✅ Item removed from cart!");

                // ✅ Update the UI immediately
                setCartItems((prevItems) => prevItems.filter(item => item.product_id !== product_id));
            } else {
                alert("⚠️ Failed to remove item. Try again.");
            }
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };

    // ✅ Fetch cart items when component mounts
    useEffect(() => {
        GetCartItems();
    }, [GetCartItems]);

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {loading ? (
                <p className="loading-text">Loading...</p>
            ) : cartitems.length > 0 ? (
                <div className="cart-grid">
                    {cartitems.map((item) => (
                        <div key={item.product_id} className="cart-item">
                            <img 
                                src={item.images} 
                                className="cart-image" 
                                alt={item.name || "Product Image"} 
                                onError={(e) => e.target.src = "/placeholder.jpg"} // Prevent broken images
                            />
                            <div className="cart-info">
                                <h5>{item.name}</h5>
                                <p className="cart-price">₹{item.price}</p>
                                <button className="btn-remove" onClick={() => RemoveCartItem(item.product_id)}>
                                    Remove from Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="empty-cart">Your cart is empty.</p>
            )}

            {/* Back to Products */}
            <div className="cart-footer">
                <Link to="/product" className="btn-continue">Continue Shopping</Link>
            </div>
        </div>
    );
};

export default Cartpage;
