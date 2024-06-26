import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

import { databases } from "../../Appwrite/config";

function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateData, setDateData] = useState([]);
  const [c, setD] = useState([]);
  const [formate, setFormate] = useState([]);

  useEffect(() => {
    setFormate([]);
    getDate();
  }, []);

  console.log(formate);

  const getDate = async () => {
    try {
      let x = await databases.listDocuments(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID1,
        []
      );
      setDateData(
        x.documents.map((e) => ({
          date: moment(e.date).toDate(),
          status: e.status,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setD(dateData);
  }, [dateData]);

  useEffect(() => {
    const convertedDates = dateData.map((e) => moment(e.date).toDate());
    setD(convertedDates);
  }, [dateData]);

  useEffect(() => {
    const formattedDates = c.map((dtObject) => {
      return `${moment(dtObject).format("M/D/YYYY")}`;
    });

    setFormate(formattedDates);
  }, [c]);

  console.log(formate);

  const isBeforeToday = (date) => {
    const today = moment().startOf("day");
    return date.isBefore(today);
  };

  const getStatusByDate = (date) => {
    const formattedDate = date.format("M/D/YYYY");
    const event = formate.find((event) => event === formattedDate);

    if (event) {
      if (event.status === "booked") {
        return "booked";
      }
      return "booked";
    } else if (isBeforeToday(date)) {
      return "disabled";
    } else {
      return "available";
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const status = getStatusByDate(moment(date));
      let backgroundColor;
      let textColor = "#e0e0e0";
      if (status === "booked") {
        backgroundColor = "red";
      } else if (status === "available") {
        backgroundColor = "green";
      } else {
        backgroundColor = "#e0e0e0";
        textColor = "#888";
      }

      return (
        <div
          className="custom-tile"
          style={{ backgroundColor, color: textColor }}
        >
          {moment(date).format("D")}
        </div>
      );
    }
  };

  return (
    <div>
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        tileContent={tileContent}
      />
    </div>
  );
}

export default Calender;