import React from "react";
import "./about.css";
import image from "../../Assets/Group 46.jpg";
import frontimg from "../../Assets/frontImage.jpg";
import chair from "../../Assets/Chair.jpeg";
import top from "../../Assets/topView.jpg";

function About() {
  return (
    <div className="mainab">
      <div className="wrapperabout">
        <div className="container">
          <img src={image} alt="img" />
        </div>
        <div className="heading1">About Us</div>
      </div>
      <div className="containerabdes">
        <div className="abcontWrapper">
          <div className="cont1">
            <div className="abheading">
              Introducing You About Kamal Celebrations
            </div>
            <div className="wrap1">
              <img className="abimgwrap" src={frontimg} alt="img" />
              <div className="abparagraph">
                Kamal Celebration Established in 2024 . Events that can be
                hosted like wedding , pre & post  wedding functions
                birthday parties Conference etc. as we have 4 types of Hall
                ranging from  capacity of 100 to 1000 people! Located in
                Besa-Pipla road, Nagpur, Kamal Celebrations  is a splendid
                banquet hall characterized by its contemporary charm and
                exceptional service.
                 Weddings are once in a lifetime event and therefore
                everything needs to be planned with utmost
                perfection. Choosing the right venue is a very important step
                for a successful wedding. If you 
                are looking for a place to host all your wedding functions in the
                most elegant manner, then 
                Kamal Celebrations is one of the most ideal options for you.
                From pre-wedding to post-wedding
                functions, you can host a wide range of your wedding
                functions with your loved ones.
              </div>
            </div>
          </div>
          <div className="cont1">
            <div className="abheading">Facility And Capacity</div>
            <div className="wrap1">
              <div className="abparagraph1">
                Kamal Celebrations offers their event spaces as indoor banquet
                halls which can easily accommodate a crowd up to 1000
                people at once. It is an ideal destination to host lavish
                weddings with small 
                gatherings.The luxurious accommodations at Kamal Celebrations,
                categorized into executive rooms,
                boast spacious interiors and modern conveniences. We also
                offer a range of amenities, including sound/ 
                music services, furnishings, essential lighting, power supply,
                and additional backup, ensuring a seamless  and
                stress-free wedding experience for you and your guests. We also
                have a team of service staff who are 
                there for you all the time and ensure that all your functions
                are carried out with much ease and smoothness.
              </div>
              <img className="abimgwrap" src={chair} alt="img" />
            </div>
          </div>
          <div className="cont1">
            <div className="abheading">How To Reach Kamal Celebrations</div>
            <div className="wrap1">
              <img className="abimgwrap" src={top} alt="img" />
              <div className="abparagraph1">
                Kamal Celebrations is located in Besa-Pipla (Nagpur). The
                nearest major airport is 
                NagpurInternational Airport. It is located approximately 7 km
                away from the venue.
                You can hire a taxi or use other local transportation
                services to reach the venue. If you take the
                train,thenthe nearest railway station is Nagpur station. It will
                be around 11 km from the venue.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
