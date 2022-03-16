import React, { useState, useEffect } from 'react';
 import axios from 'axios'; 
import { Link } from 'react-router-dom'; 
import AddForm from '../../Components/AddForm/AddForm';


function Trips() {
const [trips, setTrips] = useState([]);

const fetchTrips = async () => {
  try {

    let response = await axios.get(`${process.env.REACT_APP_API_URL}/trip`,);
    setTrips(response.data);
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchTrips();
}, []);


  return (
    <div>

<h2> Trips </h2>
     <AddForm refreshProjects={fetchTrips} />
     {trips.map((trip) => {
        return (
          <div key={trip._id}>
            <Link to={`/trips/${trip._id}`}>
              <h3>{trip.place}</h3>
              <h1>{trip.name}</h1>
            </Link>
          </div>
        );
      })}
    
    </div>

   
  )
}

export default Trips