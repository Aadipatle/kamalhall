import React, { useState, useEffect } from "react";
import "../../App.css";
import { databases } from "../../Appwrite/config";

function Bookshow() {
  const [show, setShow] = useState([]);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
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

  const handleDelete = async (documentId) => {
    try {
      await databases.deleteDocument(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID1,
        documentId
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedData = {
        name: name,
        status: status,
        number: number,
        date: date,
        occasion: occasion
      };
  
      await databases.updateDocument(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID1,
        editId,
        updatedData
      );
      getData();
      setEditId(null);
      // Clear the input fields
      setName('');
      setStatus('');
      setNumber('');
      setDate('');
      setOccasion('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (documentId, data) => {
    // Initialize input fields with existing data
    setName(data.name);
    setStatus(data.status);
    setNumber(data.number);
    setDate(data.date);
    setOccasion(data.occasion);
    
    setEditId(documentId);
  };

  return (
    <div>
      <h1
        className="tablehead"
        style={{
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          color: "#290101",
          padding: "20px",
        }}
      >
        Booking Data
      </h1>
      <div className="table_Wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Phone Number</th>
              <th>Event Date</th>
              <th>Event Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {show.map((e) => (
              <tr key={e.$id}>
                <td>
                  {editId === e.$id ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  ) : (
                    e.name
                  )}
                </td>
                <td>
                  {editId === e.$id ? (
                    <input
                      type="text"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  ) : (
                    e.status
                  )}
                </td>
                <td>
                  {editId === e.$id ? (
                    <input
                      type="tel"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  ) : (
                    e.number
                  )}
                </td>
                <td>
                  {editId === e.$id ? (
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  ) : (
                    e.date.split("T")[0]
                  )}
                </td>
                <td>
                  {editId === e.$id ? (
                    <input
                      type="text"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                    />
                  ) : (
                    e.occasion
                  )}
                </td>
                <td>
                  {editId === e.$id ? (
                    <>
                      <button style={{backgroundColor:"green" , color:"white",margin:"3px",border:"none",padding:"2px",cursor:"pointer"}} onClick={handleUpdate}>Update</button>
                      <button style={{backgroundColor:"black" , color:"white",margin:"3px",border:"none",padding:"2px",cursor:"pointer"}} onClick={() => setEditId(null)}>Cancel</button>
                    </>
                  ) : (
                    <button style={{backgroundColor:"green" , color:"white",margin:"3px",border:"none",padding:"2px",cursor:"pointer"}} onClick={() => handleEdit(e.$id, e)}>Edit</button>
                  )}
                  <button style={{backgroundColor:"red" , color:"white",margin:"3px",border:"none",padding:"2px",cursor:"pointer"}} onClick={() => handleDelete(e.$id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookshow;