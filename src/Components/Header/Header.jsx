import React from "react";
import { NavLink } from "react-router-dom";
import whatsapp from "../../Assets/whatsapp (2) 1.svg";
import call from "../../Assets/phone (1) 1.svg";
import logo from "../../Assets/kamal-logo.png";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div className="headerWrapper">
      <img className="img" src={logo} alt="log" />
      <div className={drawerOpen ? "navOpen" : "nav"}>
        <ul>
          <li><NavLink onClick={()=>setDrawerOpen(false)} to="/">
            Home
          </NavLink></li>
          <li> <NavLink onClick={()=>setDrawerOpen(false)} to="/about">
            About us
          </NavLink></li>
          <li><NavLink onClick={()=>setDrawerOpen(false)} to="/service">
            Services
          </NavLink></li>
          <li><NavLink onClick={()=>setDrawerOpen(false)} to="/enquiry">
            Enquiry
          </NavLink></li>
          <li><NavLink onClick={()=>setDrawerOpen(false)} to="/contact">
            Contact
          </NavLink></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleDrawer}>
        <div className={drawerOpen ? "bar open" : "bar"}></div>
        <div className={drawerOpen ? "bar open" : "bar"}></div>
        <div className={drawerOpen ? "bar open" : "bar"}></div>
      </div>
 
      <div className="icon">
        <a href=" https://wa.me/+919209841329">
          <img src={whatsapp} alt="wht" />
        </a>
        <a href="tel:9209841329">
          <img src={call} alt="call" />
        </a>
      </div>
    </div>
  );
}

export default Header;

