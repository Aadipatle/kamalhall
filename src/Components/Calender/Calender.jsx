import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import { parseISO } from "date-fns";
import { databases } from "../../Appwrite/config";


function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const [dateData, setDateData] = useState([]);
  const [c, setD] = useState([]);
  const [formate, setFormate] = useState([]);

  

  useEffect(() => {
    setFormate([]);
    getDate()


  }, []);

console.log(formate)
  const getDate = async () =>{

    try {
      let x = await databases.listDocuments( process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID1,[

      ])  
      setDateData(x.documents.map((e)=>({date:parseISO(e.date),status:e.status})))
  } catch (error) {
      console.log(error)
  }
  }





useEffect(()=>{
setD(dateData)
},[])


useEffect(() => {
 
  const convertedDates = dateData.map((e) => new Date(e.date));
  setD(convertedDates);
}, [dateData]);

useEffect(() => {

  const formattedDates = c.map((dtObject) => {
    return `${dtObject.getMonth() + 1}/${dtObject.getDate()}/${dtObject.getFullYear()}`;
  });

 
  setFormate(formattedDates);
}, [c]);




console.log(formate)

  const getStatusByDate = (date) => {
    const formattedDate = date.toLocaleDateString().split("T")[0];
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



  const isBeforeToday = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const tileContent = ({ date, view }) => {
    const today = new Date();
    if (view === "month") {
      const status = getStatusByDate(date);
      let backgroundColor;
      let textColor = "#e0e0e0";
      if (status=== "booked") {
        backgroundColor = "red";
      } else if (status=== "available") {
        backgroundColor = "green";
      }
       else {
        backgroundColor = "#e0e0e0";
        textColor = "#888";
      }

      return (
        <div
          className="custom-tile"
          style={{ backgroundColor, color: textColor }}
         
        >
          {date.getDate()}
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


