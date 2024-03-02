import React from "react";
import { useEffect } from "react";
import Slider from "../../Components/Slider/Slider";
import Dj from "../../Assets/dj inhouse.jpg";
import Decor from "../../Assets/decoration.jpg";
import Cater from "../../Assets/cateringin.jpeg";
import "./Home.css";
import About from "../../Components/About/About";
import Facility from "../../Components/Facility/Facility";
import Gallary from "../../Components/Gallary/Gallary";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import mobile from '../../Assets/mobileFrontImage.jpg';
import { EffectCoverflow,Autoplay} from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import Frontpage from "../../Components/Frontpage";
import Logo from '../../Assets/kamal-logo.png'

function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div>
        <Slider />
      </div>
      <img className="mobileimg" src={mobile} alt="img"/>
      <img className="homelogo" src={Logo} alt="img"/>
      <Frontpage/>
     
      <div className="mainserv">
        <div className="serviceWrap">
          <div className="heading">
            {" "}
            <h1>Services </h1>
          </div>
          <div className="serWrapper">
            <div className="timepass1" data-aos="zoom-out">
              <h1>In House DJ</h1>
              <img src={Dj} alt="img" />
            </div>
            <div id="card2" className="timepass1" data-aos="zoom-out">
              <h1>In House Decoration</h1>
              <img src={Decor} alt="img" />
            </div>
            <div id="card3" className="timepass1" data-aos="zoom-out">
              <h1>In House Catering</h1>
              <img src={Cater} alt="img" />
            </div>
          </div>

          <div className="mobile-view">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              initialSlide={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
           
              modules={[EffectCoverflow,Autoplay]}
              className="Swiper-Wrap"
            >
              <SwiperSlide className="swiperSlide" >
                 
                  <img className="serimg" src={Dj} alt="img" />
                  <div  className="sername"><p>In House DJ</p> </div>
                 
               
              </SwiperSlide>
              <SwiperSlide className="swiperSlide" >
                
                  <img className="serimg" src={Decor} alt="img" />
                  <div className="sername">In House Decoration</div>
               
              </SwiperSlide>
              <SwiperSlide className="swiperSlide"  >
                 
                  <img className="serimg" src={Cater} alt="img" />
                  <div className="sername">In House Catering</div>
               
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="serbtn">
            <Link to="/service">
              <button data-aos="flip-left">Know More Services</button>{" "}
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
