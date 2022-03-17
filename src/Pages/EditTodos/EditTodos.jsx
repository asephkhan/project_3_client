import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditTodos() {
    const [ todo , setTodo] = useState('');
    
    const { todoId } = useParams();
  
    const navigate = useNavigate();
  
    const deleteTodos = (todoId) => {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/thingsTodo/${todoId}`)
        .then(() => navigate('/TripDetails'));
    };
  
    const fetchTodos = async () => {
      try {
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/thingsTodo/${todoId}`);
        let { todo } = response.data;
        setTodo(todo);
        
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchTodos();
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const body = { todo };
  
      axios
        .put(`${process.env.REACT_APP_API_URL}/thingsTodo/${todoId}`, body)
        .then((response) => {
          setTodo('');
          navigate(`/todo/${todoId}`);
        })
        .catch((err) => console.log(err));
    };