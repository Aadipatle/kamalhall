import React from "react";
import { Link } from "react-router-dom";
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
      <div className={drawerOpen?"navOpen":"nav"}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About us </li>
          </Link>
          <Link to="/service">
            <li>Services</li>
          </Link>
          <Link to="/enquiry">
            <li>Enquiry</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
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


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import whatsapp from "../../Assets/whatsapp (2) 1.svg";
// import call from "../../Assets/phone (1) 1.svg";
// import logo from "../../Assets/kamal-logo.png";
// import "./Header.css";

// function Header() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <div className="headerWrapper">
//       <img className="img" src={logo} alt="log" />
//       <div className="nav">
//         <ul className={drawerOpen ? "nav-links open" : "nav-links"}>
//           <Link to="/" onClick={toggleDrawer}>
//             <li>Home</li>
//           </Link>
//           <Link to="/about" onClick={toggleDrawer}>
//             <li>About us</li>
//           </Link>
//           <Link to="/service" onClick={toggleDrawer}>
//             <li>Services</li>
//           </Link>
//           <Link to="/enquiry" onClick={toggleDrawer}>
//             <li>Enquiry</li>
//           </Link>
//           <Link to="/contact" onClick={toggleDrawer}>
//             <li>Contact</li>
//           </Link>
//         </ul>
//         <div className="menu-icon" onClick={toggleDrawer}>
//           <div className={drawerOpen ? "bar open" : "bar"}></div>
//           <div className={drawerOpen ? "bar open" : "bar"}></div>
//           <div className={drawerOpen ? "bar open" : "bar"}></div>
//         </div>
        
//       <div className="icon">
//         <a href="https://wa.me/+919209841329">
//           <img src={whatsapp} alt="wht" />
//         </a>
//         <a href="tel:9209841329">
//           <img src={call} alt="call" />
//         </a>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Header;
