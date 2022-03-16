import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function TripDetails() {
  const [trip, setTrip] = useState(null);
  const  { tripId } = useParams();

  const fetchTrip = async () => {
    try {
      console.log(tripId)
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/trips/${tripId}`
      );
      setTrip(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrip();
  }, [tripId]);

  return (
    <div>
      
      <h3>TripDetails</h3>
      {trip && (
        <>
          <h1>{trip.place}</h1>
           <p>{trip.name}</p>
          <p>{trip.days}</p> 
        </>
      )}
    {/*   
      {trip &&
        trip.map((triparr) => (
          <li key={trip._id}>
            <h3>{triparr.place}</h3>
            <p>{triparr.name}</p>
            <p>{triparr.days}</p>
          </li>
        ))}
 */}

      {trip && <Link to={`/trips/edit/${trip._id}`}>Edit Trip</Link>} 
      <Link to="/trips"> Back to trips</Link>
    </div>
  );
}

export default TripDetails;
