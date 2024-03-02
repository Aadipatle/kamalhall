import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/kamal-logo.png";
import whatsapp from "../../Assets/whatsapp (2) 1.svg";
import call from "../../Assets/phone (1) 1.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        
          <img className="img"  src={logo} alt="log" />
        
        <div className="linkWrapper">
          <div className="headinglink">Quick Link</div>
          <div className="link">
            <ul>
              <Link style={{textDecoration:"none"}} to='/'><li>Home</li></Link>
              <Link style={{textDecoration:"none"}}  to='/about'><li>About us</li></Link>
              <Link style={{textDecoration:"none"}}  to='/enquiry'><li>Enquiry</li></Link>
              <Link style={{textDecoration:"none"}}  to='/contact'><li>Contact us</li></Link>
            </ul>
          </div>
        </div>
        <div className="infof">
          <div className="Coninfof">
          
            <h3>Email-Id:</h3>
            <h4>kamalcelebrationsgroup@gmail.com</h4>
          </div>
          <div className="Coninfof">
            <h3>Address:</h3>
            <h4>
              Plot no 4, Rajeshwar Nagar, Besa-Pipla road, Nagpur, 440034
             
              <h4>9209841329 & 9860945554</h4>
            </h4>
            <div className="iconf">
              <div>
                <a href=" https://wa.me/+919209841329">
                  <img src={whatsapp} alt="wht" />
                </a>
              </div>
              <div>
                <a href="tel:9209841329">
                  <img src={call} alt="call" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottonfoot">
        &copy; 2024 All Rights Reserved To Kamal Celebration{" "}
      </div>
    </div>
  );
}

export default Footer;
