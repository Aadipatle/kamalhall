import React,{useState,useEffect} from "react";
import "../../App.css";
import { databases } from "../../Appwrite/config";

function Bookshow() {
    const [show, setShow] =useState([]);
    
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async (e) => {
      try {
        let x = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_APPWRITE_COLLECTION_ID1,
          []
        );
        setShow(x.documents);
      } catch (error) {
        console.log(error);
      }
    };
  
    
  

    return (
      
    <div>
   
    <h1 className="tablehead" style={{ textAlign: "center",fontFamily:"Arial, Helvetica, sans-serif",color:"#290101",padding:"20px" }}>Booking Data</h1>
    <div className="table_Wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Phone Number</th>
            <th>Event Date</th>
            <th>Event Name</th>
            
          </tr>
        </thead>
        <tbody>
          {show.map((e) => (
            <tr key={e.name}>
              <td>{e.name}</td>
              <td>{e.status}</td>
              <td>{e.number}</td>
              <td>{e.date.split('T')[0]}</td>
              <td>{e.occasion}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    )}
 

export default Bookshow
