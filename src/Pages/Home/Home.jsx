import React from "react";
import Slider from "../../Components/Slider/Slider";
import Dj from "../../Assets/dj inhouse.jpg";
import Decor from "../../Assets/decoration.jpg";
import Cater from "../../Assets/cateringin.jpeg";
import "./Home.css";
import About from "../../Components/About/About";
import Facility from "../../Components/Facility/Facility";
import Gallary from "../../Components/Gallary/Gallary";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className="mainserv">
        <div className="serviceWrap">
          <div className="heading">
            {" "}
            <h1>Services Offered By Kamal Celebration</h1>
          </div>
          <div className="serWrapper">
            <div className="timepass1">
              <h1>In House DJ</h1>
              <img src={Dj} alt="img" />
            </div>
            <div id="card2" className="timepass1">
              <h1>In House Decoration</h1>
              <img src={Decor} alt="img" />
            </div>
            <div id="card3" className="timepass1">
              <h1>In House Catering</h1>
              <img src={Cater} alt="img" />
            </div>
          </div>
          <div className="serbtn">
            <Link to="/service">
              <button>Know More Services</button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Facility />
      <Gallary />
    </div>
  );
}

export default Home;
