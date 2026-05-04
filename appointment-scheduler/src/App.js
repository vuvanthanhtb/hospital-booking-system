import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import BookingList from "./pages/BookingList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-list" element={<BookingList />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
