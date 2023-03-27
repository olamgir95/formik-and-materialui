import { Navigate, Route, Routes } from "react-router-dom";
import BookingPage from "./components/ChoosingDate/username";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ChoosingDate from "./components/ChoosingDate";
import ListOfDentists from "./components/ListOfDentists";
import { useEffect, useState } from "react";
import axios from "axios";
import AddDoctor, { getDatafromLS } from "./components/AddDoctor";

function App() {
  const [doctors, setDoctors] = useState(getDatafromLS());
 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/choosingdate/:index" element={<ChoosingDate doctors={doctors} setDoctors={setDoctors} />} />
        <Route path="/listofdentists" element={<ListOfDentists doctors={doctors} setDoctors={setDoctors} />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/newdoctor" element={<AddDoctor doctors={doctors} setDoctors={setDoctors} />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
}

export default App;
