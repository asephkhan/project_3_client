import React from "react";
import Home from "../Pages/Home/Home";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import { Routes, Route } from "react-router-dom";
import IsAnon from "../Components/IsAnon/IsAnnon";
import AllFlights from "../Components/AllFlights/AllFlights";
import IsPrivate from "../Components/IsPrivate/IsPrivate";
import EditTrip from "./EditTrip/EditTrip";
import Trips from "./Trips/Trips";
import TripDetails from "./TripDetails/TripDetails";
function Pages() {
  return (
    <div>
       
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/flights' element={<AllFlights />} />

         <Route
          path="/trips"
          element={
            <IsPrivate>
              <Trips/>
            </IsPrivate>
          }
        /> 

        <Route
          path="/trips/:tripId"
          element={
            <IsPrivate>
              <TripDetails/>
            </IsPrivate>
          }
        /> 

<Route path="/trips/edit/:tripId" element={<EditTrip />} />

        <Route path="/signup"element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          } />
        
        <Route path="/login" element={
           <IsAnon>
            <LoginPage /> 
           </IsAnon> } />
      
      </Routes>
    </div>
  );
}

export default Pages;
