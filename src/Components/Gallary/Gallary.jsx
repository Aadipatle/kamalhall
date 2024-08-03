
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../Assets/video/reel.mp4';
import image1 from '../../Assets/video/u5.jpg';
import image2 from '../../Assets/video/u1.JPG';
import image3 from '../../Assets/video/u2.JPG';
import image4 from '../../Assets/newImg/n6.JPG';
import image6 from '../../Assets/video/u6.jpg';
import image5 from '../../Assets/video/u3.JPG'; 
import image7 from '../../Assets/newImg/n4.JPG';
import image8 from '../../Assets/video/u4.JPG';

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
        <SwiperSlide className='swiperC'> <video className='slidevideo'  autoPlay='true' muted  width={'50%'} style={{transform: 'rotate(270deg)'}}> <source src={image} /> </video> </SwiperSlide>
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

