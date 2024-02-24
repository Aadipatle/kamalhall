import React from "react";
import image from "../../Assets/Chair.jpeg";
import { Link } from "react-router-dom";
import "./Facility.css";

function Facility() {
  return (
    <div className="Facility">
      <div className="fcWrapper">
        <div className="fcheading">
          <h1>Facility And Capacity</h1>
        </div>
        <div className="facilityWrapper">
          <img src={image} alt="img" />
          <div>
            <div className="fcparagraph">
              {" "}
              Kamal Celebrations offers their event spaces as indoor banquet
              halls which can easily accommodate
               a crowd up to 1000 people at once. It is an ideal
              destination to host lavish weddings with small  gatherings.
              The luxurious accommodations at Kamal Celebrations, categorized
              into executive rooms,
              boast spacious interiors and modern conveniences.{" "}
            </div>
            <div className="fcbtn">
              <Link to="/about">
                <button>Know More </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
