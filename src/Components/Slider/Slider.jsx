import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../Assets/frontImage.jpg";
import image2 from "../../Assets/sideView.jpg";
import image3 from "../../Assets/stage.jpeg";
import image4 from "../../Assets/Chair.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import "./Slider.css";

import { EffectFade, Autoplay} from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Frontpage from "../Frontpage";

export default function Slider() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/enquiry");
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[EffectFade, Autoplay]}
        
      >
        <SwiperSlide className="custom-slide">
          <img className="slide-content" src={image1} alt="img" />{" "}

        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <img className="slide-content" src={image2} alt="img" />
         
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <img className="slide-content" src={image3} alt="img" />
         
        </SwiperSlide>
        <SwiperSlide className="custom-slide">
          <img className="slide-content" src={image4} alt="img" />
         
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
