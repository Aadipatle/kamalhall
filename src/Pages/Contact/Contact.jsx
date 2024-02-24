import React from "react";
import image from "../../Assets/Group 46.jpg";
import "./Contact.css";
import whatsapp from "../../Assets/whatsapp (2) 1.svg";
import call from "../../Assets/phone (1) 1.svg";

function Contact() {
  return (
    <div className="mainab">
      <div className="wrapperabout">
        <div className="container">
          <img src={image} alt="img" />
        </div>
        <div className="heading1">Contact Us</div>
      </div>
      
        <div className="CcontWrapper">
          <div className="info">
            <div className="Coninfo">
              {" "}
              Email-Id:<span>kamalcelebrationsgroup@gmail.com</span>
            </div>
            <div className="Coninfo">
              Address:
              <span>
                Plot no 4, Rajeshwar Nagar, Besa-Pipla road, Nagpur, 440034
              </span>
            </div>
            <div className="Coninfo">
              Contact:<span>9209841329 & 9860945554</span>
            </div>
            <div className="icon1">
            <a href=" https://wa.me/+919209841329">
              <img src={whatsapp} alt="wht" />
            </a>
            <a href="tel:9209841329">
              <img src={call} alt="call" />
            </a>
          </div>
          </div>
          <div className="map">
            <iframe
              title="kamal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.67114916643175!2d79.11698121029242!3d21.083108587151422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b91a20950881%3A0xbe82fec1e94d5f12!2sKamal%20celebration!5e0!3m2!1sen!2sin!4v1708315333442!5m2!1sen!2sin"
              width={500}
              height={400}
              className="map"
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
     
    </div>
  );
}

export default Contact;
