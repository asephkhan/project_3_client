import axios from 'axios';
import { React, useState } from 'react';

function AddForm(props) {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('')
    const storedToken = localStorage.getItem('authToken')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
      
      const body = { name, place, days };
      console.log('yellow')
      axios
      .post(`${process.env.REACT_APP_API_URL}/trip`, body, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => {
        setName('');
        setPlace('');
        setDays('');
        props.refreshtrips(); 
      })
      .catch((err) => console.log(err));
      
    }
  return (
    <div>
<h3>Add a trip </h3>
<form onSubmit={handleSubmit}>

 <label htmlFor="name">Name</label>
 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

 <label htmlFor="place">Place</label>
 <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />

 <label htmlFor="days">Days</label>
 <input type="number" value={days} onChange={(e) => setDays(e.target.value)} />

 
 
<button type="submit">Add Trip</button>
</form>
    
    
    
    </div>
  )
  
  }
export default AddForm;