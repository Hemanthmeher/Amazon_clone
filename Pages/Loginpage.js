import { useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";

const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const FetchData = async () => {
        if (!email || !password) {
            setErrorMessage("Please enter both email and password.");
            return;
        }

        const data = new FormData();
        data.append("email", email);
        data.append("password", password);

        try {
            const response = await axios.post(
                "https://amazon.indianhackerslab.com/login-user.php",
                data,
                { headers: { "content-type": "multipart/form-data" } }
            );

            if (response.data.status === "success") {
                console.log("User ID:", response.data.data.user_id);
                localStorage.setItem("user_id", response.data.data.user_id);
                window.location.replace("/home");
            } else {
                setErrorMessage("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            {/* Banner Image */}
            <Carousel>
                <Carousel.Item>
                    <div className="full-image">
                        <img
                            className="w-100"
                            style={{ marginTop: "-600px" }}
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg"
                            alt="Login Banner"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* Login Form */}
            <div className="login-container">
                <h3>LOGIN</h3>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="Enter your Email"
                    className="d-block"
                />
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder="Enter valid password"
                    className="d-block mt-3"
                />
                <button onClick={FetchData} className="d-block mt-3">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Loginpage;
