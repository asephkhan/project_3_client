import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddForm from "../../Components/AddForm/AddForm";
function Trips() {
  const [trips, setTrips] = useState([]);
  const storedToken = localStorage.getItem("authToken");

  const fetchTrips = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/trip`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setTrips(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <>
      <div>
        <div>
          <AddForm refreshtrips={fetchTrips} />
        </div>

        <div className="py-4">
          {trips.map((trip) => {
            return (
              <>
                <div key={trip._id}>
                  <div className=" bg-blue-300  ">
                    <Link
                      className=" no-underline text-blue-900 font-semibold gap-0"
                      to={`/trips/${trip._id}`}
                    >
                      <p>Trip Name: <span>{trip.name}</span></p>
                      <p>Location: {trip.place}</p>
                      <p>Number of days: {trip.days}</p>
                      
                    </Link>
                  </div>

                  <div className="bg-blue-600 text-center ">
                    {trip && (
                      <button  >
                        <Link className=" no-underline text-slate-200 "  to={`/trips/edit/${trip._id}`}>Edit Trip</Link>
                      </button>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Trips;
