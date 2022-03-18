import axios from 'axios';
import { React, useState } from 'react';
import { useParams } from 'react-router-dom';

function AddTodo(props) {
const [todo, setTodo] = useState('');

const storedToken = localStorage.getItem('authToken')

const { tripId } = useParams();

const handleSubmit = (e) => {
    e.preventDefault();
    
  
  const body = { todo, tripId };

  axios
  .post(`${process.env.REACT_APP_API_URL}/thingstodo`, body, {
    headers: { Authorization: `Bearer ${storedToken}` }
  })
  .then((response) => {
    setTodo('');
    
    props.refreshtodos();
  })
  .catch((err) => console.log(err));
  
}

  return (
     <div className="todo-form">
        <h2> Trip Details </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">Add To Do!</label>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} required/>
            <button type="submit">Add todo </button>
        </form>
    </div> 
/*  <div class="wrapper">
<header>Todo List</header>
<form onSubmit={handleSubmit}>
<div class="inputField">
  <input type="text" placeholder="Enter new task" value={todo} onChange={(e) => setTodo(e.target.value)} required />
  <button type="submit" >add</button>
</div> *

<div class="footer">
 
</div>
</form>
</div> */
  )
}

export default AddTodo;

