import React from "react";
import image from "../../Assets/Chair.jpeg";
import {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Facility.css";
import { HashLink } from "react-router-hash-link";

function Facility() {
  useEffect(()=>{
    Aos.init({duration:3000})
   },[])
  return (
    <div className="Facility">
      <div className="fcWrapper">
      <div className="facilityWrapper">
          <img src={image} alt="img" data-aos="fade-right" data-aos-duration="2000" />
          <div>
        <div className="fcheading">
          <h1  data-aos="new-animation">Facility And Capacity</h1>
        </div>
        
            <div  data-aos="new-animation"  className="fcparagraph">
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
               <HashLink to={'/about#target-section'}>
               <button data-aos="fade-up" data-aos-duration="2000">Know More </button>
               </HashLink>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facility;
