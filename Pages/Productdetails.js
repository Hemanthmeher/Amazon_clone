import { useParams } from "react-router-dom";
import { useState, useEffect, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import axios from "axios";
import Usercontext from "../Usercontext";
import Checklogin from "../Checklogin";
import "./Productdetails.css";

const Productdetails = () => {
    const { product_id } = useParams();
    const [details, setDetails] = useState(null);
    const [toast, setToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const user_id = localStorage.getItem("user_id");

    // Fetch Product Details
    const FetchData = useCallback(async () => {
        if (!product_id) return;
        
        const data = new FormData();
        data.append("product_id", product_id);
        try {
            const response = await axios.post(
                "https://amazon.indianhackerslab.com/get-product-details.php",
                data,
                { headers: { "content-type": "multipart/form-data" } }
            );
            if (response.data && response.data.product_data) {
                setDetails(response.data.product_data);
            }
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }, [product_id]);

    useEffect(() => {
        FetchData();
    }, [FetchData]);

    // Add Product to Cart with Confirmation
    const AddCart = async () => {
        if (!user_id) {
            alert("Please log in to add items to the cart.");
            return;
        }
        if (!window.confirm("Are you sure you want to add this product to your cart?")) {
            return;
        }
        const data = new FormData();
        data.append("user_id", user_id);
        data.append("product_id", product_id);
        try {
            const response = await axios.post(
                "https://amazon.indianhackerslab.com/insert-cart.php",
                data,
                { headers: { "content-type": "multipart/form-data" } }
            );
            if (response.data.status === "success") {
                setToastMessage("✅ Product added to cart!");
                setToast(true);
            } else {
                setToastMessage("⚠️ Failed to add product to cart.");
                setToast(true);
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    return (
        <div className="product-container">
            {details ? (
                <>
                    <div className="product-details">
                        <div className="product-image">
                            <img src={details.images} alt={details.name || "Product"} />
                        </div>
                        <div className="product-info">
                            <h2 className="product-title">{details.name}</h2>
                            <div className="rating-section">
                                <Rating
                                    name="half-rating-read"
                                    value={details.ratings}
                                    precision={0.5}
                                    size="large"
                                    readOnly
                                />
                                <span className="rating-text">{details.ratings} ★ | 80 ratings</span>
                            </div>
                            <p className="product-brand"><strong>Brand:</strong> {details.brand}</p>
                            <p className="product-description">{details.description}</p>
                            <h4 className="product-price">₹{details.price}</h4>
                            <p className="discount-text">
                                M.R.P.: <span className="strike">₹89,999</span> | You Save: ₹71,299 (79%)
                            </p>
                            <p className="tax-text">Inclusive of all taxes</p>
                            <div className="delivery-info">
                                <p><strong>FREE delivery:</strong> Thursday, 20 March</p>
                                <p className="in-stock">✅ In stock</p>
                            </div>
                            <div className="button-section">
                                <button className="add-to-cart" onClick={AddCart}>Add to Cart</button>
                                <button className="buy-now">Buy Now</button>
                            </div>
                            <Link to="/product" className="back-button">Back</Link>
                        </div>
                    </div>
                    {toast && (
                        <div className="toast-container">
                            <div className="toast">
                                <p>{toastMessage}</p>
                                <button onClick={() => setToast(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Productdetails;
