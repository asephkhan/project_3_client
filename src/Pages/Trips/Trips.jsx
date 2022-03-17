import React, { useState, useEffect } from 'react';
 import axios from 'axios'; 
import { Link } from 'react-router-dom'; 
import AddForm from '../../Components/AddForm/AddForm';

function Trips() {
const [trips, setTrips] = useState([]);
const storedToken = localStorage.getItem('authToken')

const fetchTrips = async () => {
  try {

    let response = await axios.get(`${process.env.REACT_APP_API_URL}/trip`,{
      headers: { Authorization: `Bearer ${storedToken}` }
    });
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
    <div >

<h2> Trips </h2>
     <AddForm refreshtrips={fetchTrips} />
     {trips.map((trip) => {
        return (
          < div className='trip-container' key={trip._id}>
            <Link className='trip-name-link' to={`/trips/${trip._id}`}>
            <h3>{trip.name}</h3></Link>
              
              <p>{trip.place}</p>
              
           
          </div>
        );
      })}
    
    </div>

   
  )
}

export default Trips