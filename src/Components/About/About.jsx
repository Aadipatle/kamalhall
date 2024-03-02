import React from "react";
import {useState, useEffect } from "react";
import image from "../../Assets/frontImage.jpg";
import "./About.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { HashLink } from "react-router-hash-link";
function About() {
 useEffect(()=>{
  Aos.init({duration:3000})
 },[])

  return (
    <div className="about">
      <div className="aboutWrapper">
      <div className="AbWrapper">
      <img style={{
         
        }} src={image} alt="img"  data-aos="zoom-in"/>
      <div>
        <div className="heading">
          <h1  data-aos="new-animation" >About Us</h1>
        </div>
       
            <div  data-aos="new-animation" className="paragraph">
              Kamal Celebration Established in 2024 . Events that can be hosted
              like wedding , pre & post  wedding functions birthday
              parties Conference etc. as we have 4 types of Hall ranging from
              capacity  of 100 to 1000 people! Located in Besa-Pipla
              road,Nagpur, Kamal Celebrations is a splendid  banquet hall
              characterised by its contemporary charm and exceptional service.
              Weddings are once in a lifetime event and therefore
              everything needs to be planned with utmost perfection.Choosing{" "}
               the right venue is a very important step for a successful
              wedding.{" "}
            </div>
            <div className="abbtn">
              <Link to="/about">
              <HashLink to={'/about#target-sec'}>
                <button data-aos="fade-up" data-aos-duration="2000" >Know More </button>
                </HashLink>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
