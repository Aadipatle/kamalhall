
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../Assets/frontImage.jpg';
import image2 from '../../Assets/sideView.jpg';
import image3 from '../../Assets/Chair.jpeg';
import image4 from '../../Assets/stage.jpeg';
import image5 from '../../Assets/lift.jpeg';
import image6 from '../../Assets/gate.jpeg';
import image7 from '../../Assets/room (1).png';
import image8 from '../../Assets/bedroom.png';

import 'swiper/css';
import 'swiper/css/pagination';
import Aos from "aos";
import "aos/dist/aos.css";
import './Gallary.css';



export default function Gallary() {
  return (
    <div className="gallaryWrapper">
  <div className='gheading'  data-aos="zoom-in-up" data-aos-duration="2000"><h1>Gallery</h1></div>
      <Swiper
       spaceBetween={20}
        slidesPerView={2}
        className="mySwiper"
        data-aos="fade-up"
        
     data-aos-duration="2000"
      >
        <SwiperSlide className='swiperC'><img className="slideimg" src={image1} alt='img'/></SwiperSlide>
        <SwiperSlide className='swiperC'><img className="slideimg" src={image2} alt='img'/></SwiperSlide>
        <SwiperSlide className='swiperC'><img className="slideimg" src={image3} alt='img'/></SwiperSlide>
        <SwiperSlide className='swiperC'><img className="slideimg" src={image4} alt='img'/></SwiperSlide>
        <SwiperSlide className='swiperC'><img className="slideimg" src={image5} alt='img'/></SwiperSlide>
        <SwiperSlide className='swiperC'><img className="slideimg" src={image6} alt='img'/></SwiperSlide>
        <SwiperSlide className='swiperC'><img className="slideimg" src={image7} alt='img'/></SwiperSlide>
        <SwiperSlide className='swiperC'><img className="slideimg" src={image8} alt='img'/></SwiperSlide>
        
      </Swiper>
    </div>
  );
}

