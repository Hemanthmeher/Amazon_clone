import { Link } from "react-router-dom";
import { useState } from "react";
import Checklogin from "../Checklogin";
import "../Header.css";


const Header2 = () => {
    
const[loggedin,setLoggedin] = useState(Checklogin())
   

    return (
            <div>
                <div className="header">
                <div className="items">
                 <h6>home</h6>
                 <h6>details</h6>   
                </div>

                <div className="searchbar">
                {/*<div className="menu"><button>All⬇️</button> </div>*/}
                    <input type="text" placeholder="Search for product" />
                    <button>🔍</button>
                </div>
                {loggedin?<Link to={"/account"} type="button">Go to Account</Link>:
                <>
                <div classname="login&sign">
                    <Link to={"/login"} type="button" className="btn btn-warning" style={{marginRight:"20px"}}>Login</Link>
                    <Link to={"/signup"} type="button" className="btn btn-warning">Signup</Link>
                    </div>
                </>
                    }
                
            </div>
            </div>
        
    );
};

export default Header2;
