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

        <div>
          {trips.map((trip) => {
            return (
              <>
                <div key={trip._id}>
                  <Link to={`/trips/${trip._id}`}>
                    <h3>{trip.name}</h3>
                  </Link>
                  <div>
                    {trip && (
                      <button>
                        <Link to={`/trips/edit/${trip._id}`}>Edit Trip</Link>
                      </button>
                    )}
                  
                      {/* <button> Delete Trip</button> */}
                  
                  </div>
                  {/* <p>{trip.place}</p>
                  <p>{trip.days} days</p> */}
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
