import React, { useEffect, useState } from "react";
import "../App.css";
import { databases } from "../Appwrite/config";
import Book from "./Book";
import { useNavigate } from "react-router-dom";


const Enquiry2 = ({setOpen}) => {
  const [show, setShow] = useState([]);
  const [page,setPage] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    try {
      let x = await databases.listDocuments(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID,
        []
      );
      setShow(x.documents);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick=()=>{
    
 navigate('/admin');
  setOpen(false)
  }

function nav(){
  setPage(!page)
}

  return (
    <>
    <div className="btn">
    <button onClick={()=>{nav()}} className="btnToggle"> {
      page? "Book" : "Enquiry"
    }  </button>
    </div>
   
   {
page ? (
  <>
  <div className="butwrap">
 <button onClick={handleClick}>logout</button>
 </div>
  <h1 className="tablehead" style={{ textAlign: "center",fontFamily:"Arial, Helvetica, sans-serif",color:"#290101",padding:"20px" }}>Enquiry Data</h1>
  <div className="table_Wrapper">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Email</th>
          <th>Occasion</th>
          <th>Guest</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {show.map((e) => (
          <tr key={e.name}>
            <td>{e.name}</td>
            <td>{e.number}</td>
            <td>{e.email}</td>
            <td>{e.occasion}</td>
            <td>{e.guest}</td>
            <td>{e.date.split('T')[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>
) : (
  <Book/>
)
   }

     

    
    </>
  );
};

export default Enquiry2;
