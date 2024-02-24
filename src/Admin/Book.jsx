import React from "react";
// import Header from "../components/Header";
import { useState } from "react";
import "../App.css";

import { databases } from "../Appwrite/config";
import Bookshow from "./components/bookshow";

const Book = () => {
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [number, setNumber] = useState();
  const [occasion, setOccasion] = useState();
  const [date, setDate] = useState();
  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let x = await databases.createDocument(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID1,
        "unique()",
        {
          name: name,
          number: number,
          date: date,
          occasion: occasion,
          status: status,
        }
      );
      setName("");
      setStatus("");
      setNumber("");
      setOccasion("");
      setDate("");

      console.log(x);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="mainabb">
          <div className="formWrapperr">
            <div className="headingEnn">Booking Form</div>
            <form onSubmit={handleSubmit}>
              <div className="labell">
                <label>Name:</label>
              </div>
              <div className="inputt">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  required
                />
              </div>
              <div className="labell">
                <label>Status:</label>
              </div>
              <div className="inputt">
                <select
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value="" hidden>
                    Select Service
                  </option>
                  <option value="available ">Available</option>
                  <option value="booked">Booked</option>
                </select>
              </div>
              <div className="labell">
                <label>Phone:</label>
              </div>
              <div className="inputt">
                <input
                  type="tel"
                  name="number"
                  maxLength={10}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="phone"
                />
              </div>
              <div className="labell">
                <label>Event Date:</label>
              </div>
              <div className="inputt">
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Event Date"
                  required
                />
              </div>

              <div className="labell">
                <label>Event Name:</label>
              </div>
              <div className="inputt">
                <input
                  type="text"
                  name="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  placeholder="Event Name"
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
     <Bookshow/>
    </>
  );
};

export default Book;