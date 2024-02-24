import React from "react";
import image from "../../Assets/Group 46.jpg";
import Dj from "../../Assets/dj inhouse.jpg";
import Decor from "../../Assets/decoration.jpg";
import Cater from "../../Assets/cateringin.jpeg";
import dress from "../../Assets/dressing room.jpeg";
import parking from "../../Assets/car parking.jpg";
import valet from "../../Assets/Component 12.jpg";
import guest from "../../Assets/guest.jpg";
import stage from "../../Assets/stage.jpeg";
import "./PgService.css";

function PgService() {
  return (
    <div>
      <div className="mainab">
        <div className="wrapperabout">
          <div className="container">
            <img src={image} alt="img" />
          </div>
          <div className="heading1">Service</div>
        </div>
        <div className="containerabdes">
          <div className="abcontWrapper">
            <div className="serheadwrap">
              <div className="serheading">
                Services Offered By Kamal Celebration
              </div>
            </div>
            <div className="mainser">
              <div className="pserWrapper">
                <div className="timepass">
                  <h1>In House DJ</h1>
                  <img src={Dj} alt="img" />
                </div>
                <div className="timepass">
                  <h1>In House Decoration</h1>
                  <img src={Decor} alt="img" />
                </div>
                <div className="timepass">
                  <h1>In House Catering</h1>
                  <img src={Cater} alt="img" />
                </div>
              </div>
              <div className="pserWrapper">
                <div className="timepass">
                  <h1>Bridal And Dressing Room</h1>
                  <img src={dress} alt="img" />
                </div>
                <div className="timepass">
                  <h1>Parking Area</h1>
                  <img src={parking} alt="img" />
                </div>
                <div className="timepass">
                  <h1>Valet Parking</h1>
                  <img src={valet} alt="img" />
                </div>
              </div>
            </div>
            <div className="pserWrapper">
              <div className="timepass">
                <h1>Guest Accomodation</h1>
                <img src={guest} alt="img" />
              </div>
            </div>
            <div className="contwrap">
              <div className="sercont">
                Kamal Celebrations offers you a wide range of services which can
                be personalised and customized depending upon your needs and
                preferences. For your ease and convenience, we give you in-house
                caterers so that you can select your menu depending upon your
                needs and preferences. Only in-house decor vendors are allowed
                to decorate the wedding venue. You can sit with them and discuss
                your themes and they will decorate your venue just the way you
                have envisioned it. We also provide abundant services and let
                you enjoy your functions without worry.{" "}
              </div>
              <img className="serimgwrap" src={stage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PgService;
