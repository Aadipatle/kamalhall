import React, { useState } from "react";
import image from "../../Assets/Group 46.jpg";
import "./Enquiry.css";
import Calender from "../../Components/Calender/Calender";
import { databases } from "../../Appwrite/config";


function Enquiry() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [occasion, setOccasion] = useState();
  const [date, setDate] = useState();
  const [guest, setGuest] = useState();
  const [submit, setSubmit] = useState([]);
  const [errors, setErrors] = useState({});
  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let x = await databases.createDocument(process.env.REACT_APP_APPWRITE_DATABASE_ID, process.env.REACT_APP_APPWRITE_COLLECTION_ID, 'unique()', {
            name: name,
            email: email,
            number: number,
            guest: guest,
            occasion: occasion,
            date: date
        })
        setName('');
        setEmail('');
        setNumber('');
        setOccasion('');
        setDate('');
        setGuest('');
        console.log(x);
    } catch (error) {
        console.log(error)
    }

    

};

 

  return (
    <div>
      <div className="mainab">
        <div className="wrapperabout">
          <div className="container">
            <img src={image} alt="img" />
          </div>
          <div className="heading1">Enquiry</div>
        </div>

        <div className="EncontWrapper">
          <div className="calenderWrapper">
            <Calender />
            <div className="boxwrapper">
              <div className="boxw">
                <div className="box"></div> <div>Booked</div>
              </div>
              <div className="boxw">
                <div className="box1"></div> <div>Available</div>
              </div>
            </div>
          </div>
          <div className="formWrapper">
            <div className="headingEn">Enquiry Form</div>

            <form onSubmit={handleSubmit}>
              <div className="label">
                <label>Name:</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  required
                />
              </div>
              <div className="label">
                <label>Email:</label>
              </div>
              <div className="input">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  required
                />
              </div>
              <div className="label">
                <label>Phone:</label>
              </div>
              <div className="input">
                <input
                  type="tel"
                  name="number"
                  maxLength={10}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="phone"
                />
              </div>
              <div className="label">
                <label>Number of Guest:</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  name="guest"
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                  placeholder="no. of Guest"
                  required
                />
              </div>
              <div className="label">
                <label>Occassion:</label>
              </div>
              <div className="input">
                <input
                  type="text"
                  name="Occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  placeholder="Occassion"
                  required
                />
              </div>
              <div className="label">
                <label>Date:</label>
              </div>
              <div className="input">
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Detail"
                  required
                />
              </div>
              <div className="button">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
