import React from "react";
import image1 from '../../Assets/frontImage.jpg';
import image2 from '../../Assets/sideView.jpg';
import image3 from '../../Assets/Chair.jpeg';
import image4 from '../../Assets/stage.jpeg';
import image5 from '../../Assets/lift.jpeg';
import image6 from '../../Assets/gate.jpeg';
import './Gallary.css'


function Gallary() {
  
  return (
    <div className="gallaryWrapper">
    <div className='gheading'><h1>Gallary</h1></div>
      <div className="imageWrapper">
        <img className="img1" src={image1} alt="img"/>
        <img className="img2" src={image2} alt="img"/>
      </div>
      <div className="imageWrapper">
     <img className="img3" src={image3} alt="img"/>
        <img className="img4"  src={image4} alt="img"/>
      </div>
      <div className="imageWrapper">
        <img className="img5" src={image5} alt="img"/>
        <img className="img6"  src={image6} alt="img"/>
      </div>
      
   
    </div>
  );
}

export default Gallary;
