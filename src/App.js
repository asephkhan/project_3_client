import React from "react";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import { Routes, Route } from "react-router-dom";
import IsAnon from "./Components/IsAnon/IsAnnon";
import Navbar from "./Components/Navbar/Navbar";
import IsPrivate from "./Components/IsPrivate/IsPrivate";
import EditTrip from "./Pages/EditTrip/EditTrip";
import Trips from "./Pages/Trips/Trips";
import TripDetails from "./Pages/TripDetails/TripDetails";

function App() {
  return (
    <div className=" bg-blue-200 min-h-screen p-4">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/trips"
          element={
            <IsPrivate>
              <Trips />
            </IsPrivate>
          }
        />

        <Route
          path="/trips/:tripId"
          element={
            <IsPrivate>
              <TripDetails />
            </IsPrivate>
          }
        />

        <Route path="/trips/edit/:tripId" element={<EditTrip />} />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
