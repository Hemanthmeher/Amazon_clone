import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import Rating from "@mui/material/Rating";
import "./Productpage.css"; // Import updated CSS

const Productpage = () => {
    const [products, ChangeProducts] = useState([]);
    const [loading, ChangeLoading] = useState(true);
    const [toast, setToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    // ✅ Fetch Product Data
    const FetchData = useCallback(async () => {
        try {
            const data = new FormData();
            const response = await axios.post(
                "https://amazon.indianhackerslab.com/get-products.php",
                data,
                { headers: { "content-type": "multipart/form-data" } }
            );

            if (response.data && response.data.products) {
                // ✅ Assign random ratings to each product
                const updatedProducts = response.data.products.map((product) => ({
                    ...product,
                    ratings: (Math.random() * (5 - 2) + 2).toFixed(1) // Generates random rating between 2.0 - 5.0
                }));

                ChangeProducts(updatedProducts);
            } else {
                console.warn("No products found.");
                ChangeProducts([]);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            ChangeLoading(false);
        }
    }, []);

    useEffect(() => {
        FetchData();
    }, [FetchData]);

    // ✅ Add to Cart Function
    const AddCart = async (product) => {
        const user_id = localStorage.getItem("user_id");

        if (!user_id) {
            alert("Please log in to add items to the cart.");
            return;
        }

        const data = new FormData();
        data.append("user_id", user_id);
        data.append("product_id", product.product_id);

        try {
            const response = await axios.post(
                "https://amazon.indianhackerslab.com/insert-cart.php",
                data,
                { headers: { "content-type": "multipart/form-data" } }
            );

            console.log("Add to Cart API Response:", response.data);

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
        <div className="container">
            {/* Toast Notification */}
            <div className="position-fixed toast-container">
                <Toast onClose={() => setToast(false)} show={toast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">{toastMessage}</strong>
                    </Toast.Header>
                </Toast>
            </div>

            {/* Fetch Product Button & Back Button */}
            <div className="header-buttons">
                <button onClick={FetchData} className="btn-filter">
                    🔍 Load Products
                </button>
                <Link to={"/home"} className="btn-back">
                    Back
                </Link>
            </div>

            {/* Loading Indicator */}
            {loading && <p className="loading-text">Loading products...</p>}

            {/* Product Listing */}
            <div className="product-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.product_id} className="product-card">
                            <img src={product.images} className="product-image" alt={product.name} />
                            <h6 className="product-title">{product.name}</h6>
                            
                            {/* Random Rating for Each Product */}
                            <div className="rating-container">
                                <b>Rating -</b>
                                <Rating name="half-rating-read" value={parseFloat(product.ratings)} precision={0.5} size="small" readOnly />
                            </div>

                            {/* Buttons */}
                            <div className="button-group">
                                <Link to={`/product-details/${product.product_id}`} className="btn-view">
                                    View Details
                                </Link>
                                <button className="btn-cart" onClick={() => AddCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-products">No products available</p>
                )}
            </div>
        </div>
    );
};

export default Productpage;
