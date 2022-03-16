import axios from 'axios';
import { React, useState } from 'react';

function AddForm(props) {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [days, setDays] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        
      
      const body = { name, place, days };
      console.log('yellow')
      axios
      .post(`${process.env.REACT_APP_API_URL}/trip`, body)
      .then((response) => {
        setName('');
        setPlace('');
        setDays('');
        props.refreshTrips(); 
      })
      .catch((err) => console.log(err));
      
    }
  return (
    <div>
    <h2> Add Trip </h2>

<form onSubmit={handleSubmit}>

 <label htmlFor="name">Name</label>
 <input type="text" onChange={(e) => setName(e.target.value)} />

 <label htmlFor="place">Place</label>
 <input type="text" onChange={(e) => setPlace(e.target.value)} />

 <label htmlFor="days">Days</label>
 <input type="text" onChange={(e) => setDays(e.target.value)} />

 
 
<button type="submit">Add Trip</button>
</form>
    
    
    
    </div>
  )
  
  }
export default AddForm;