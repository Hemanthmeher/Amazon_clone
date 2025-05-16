import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Homepage.css";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="homepage">
      {/* Carousel Section */}
      <Carousel className="carousel-container">
        <Carousel.Item>
          <div className="gradient">
            <img
              className="w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/UBS/March/Unrec/2-1._CB548654138_.jpg"
              alt="Shopping img"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gradient">
            <img
              className="w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg"
              alt="Shopping img"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="gradient">
            <img
              className="w-100"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
              alt="Shopping img"
            />
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Category Section */}
      <div className="category">
        {/* Box 1 - Appliances */}
        <div className="sbox">
          <h5>Appliances for your home | Up to 55% off</h5>
          <div className="side-content">
            <div className="box-item">
              <img
                className="w-100"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                alt="Air Conditioners"
              />
              <h6>Air Conditioners</h6>
            </div>
            <div className="box-item">
              <img
                className="w-100"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                alt="Refrigerator"
              />
              <h6>Refrigerator</h6>
            </div>
            <div className="box-item">
              <img
                className="w-100"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                alt="Microwave Oven"
              />
              <h6>Microwave Oven</h6>
              <div className="seemore">
                <h6>See more</h6>
              </div>
            </div>
            <div className="box-item">
              <img
                className="w-100"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                alt="Washing Machine"
              />
              <h6>Washing Machine</h6>
            </div>
          </div>
        </div>

        {/* Box 2 - Home Essentials */}
        <div className="sbox">
          <h5>Revamp your home in style</h5>
          <div className="side-content">
            <div className="box-item">
              <img className="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" alt="Home Furnishings"/>
              <h6>Home Furnishings</h6>
            </div>
            <div className="box-item">
              <img className="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" alt="Home Decor"/>
              <h6>Home Decor</h6>
            </div>
            <div className="box-item">
              <img className="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" alt="Home Storage"/>
              <h6>Home Storage</h6>
              <div className="seemore">
                <h6>Explore all</h6>
              </div>
            </div>
            <div className="box-item">
              <img className="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" alt="Lighting"/>
              <h6>Lighting</h6>
            </div>
          </div>
        </div>

        {/* Box 3 - Headphones */}
        <div className="sbox">
          <h5>Starting ₹149 | Headphones</h5>
          <div className="side-content">
            <div className="box-item">
              <img className="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" alt="boAt Headphones"/>
              <h6>boAt</h6>
            </div>
            <div className="box-item">
              <img className="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" alt="Boult Headphones"/>
              <h6>Boult</h6>
            </div>
            <div className='box.item'>
                        <img className='w-100' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" alt="box image1"/>
                        <h6>Applications</h6>
                        <div className="seemore">
                        <h6>see more</h6>
                        </div>
                    </div>
                    <div className='box.item'>
                        <img className='w-100' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" alt="box image1"/>
                        <h6>Applications</h6>
                    </div>
          </div>
        </div>

        {/* Box 4 - Automotive Essentials */}
        <div className="sbox">
          <h5>Automotive essentials | Up to 60% off</h5>
          <div className="side-content">
            <div className="box-item">
              <img className="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="Glass Care"/>
              <h6>Glass Care</h6>
            </div>
            <div className='box.item'>
                        <img className='w-100' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" alt="box image1"/>
                        <h6>Applications</h6>
                    </div>
                    <div className='box.item'>
                        <img className='w-100' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" alt="box image1"/>
                        <h6>Applications</h6>
                        <div className="seemore">
                        <h6>see more</h6>
                        </div>
                    </div>
                    <div className='box.item'>
                        <img className='w-100' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" alt="box image1"/>
                        <h6>Applications</h6>
                    </div>
                </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
