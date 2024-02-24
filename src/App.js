import "./App.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import PgService from "./Pages/PgService/PgService";
import Enquiry from "./Pages/Enquiry/Enquiry";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Book from "./Admin/Book";
import Enquiry2 from "./Admin/Enquiry2";
import Login from "./Admin/Login/Login";
import ProtectedRoute from "./ProtectedRoute";


function App() {
  const [open,setOpen] = useState(false)
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<PgService />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin"  element={<Login open={open} setOpen={setOpen}/>} />
        <Route  element={<ProtectedRoute open={open}/>} > 
        <Route path="/data"  element={<Enquiry2 open={open} setOpen={setOpen} />} /> 
        <Route path="/book" element={<Book/>} /> 
   </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
