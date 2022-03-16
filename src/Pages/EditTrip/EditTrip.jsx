import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditTrip() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [days, setDays] = useState('');


  const { tripId } = useParams();

  const navigate = useNavigate();

  const deleteTrip = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/trips/${tripId}`)
      .then(() => navigate('/trips'));
  };

  const fetchProject = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/trips/${tripId}`);
      let { name, place, days } = response.data;
      setName(name);
      setPlace(place);
      setDays(days);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, place, days };

    axios
      .put(`${process.env.REACT_APP_API_URL}/trips/${tripId}`, body)
      .then((response) => {
        setName('');
        setPlace('');
        setDays('');
        navigate(`/trips/${tripId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit Trip</h3>
      <form onSubmit={handleSubmit}>

     

<label htmlFor="name">Name</label>
<input type="text"  name="name" value={name} onChange={(e) => setName(e.target.value)} />

<label htmlFor="place">Place</label>
<input type="text" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />

<label htmlFor="days">Days</label>
<input type="text" name="days" value={days} onChange={(e) => setDays(e.target.value)} />


<button type="submit">Edit Project</button>
      </form>

      <button onClick={deleteTrip}> Delete Trip</button>
    </div>
  );
}

export default EditTrip;