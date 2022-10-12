import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTodo from "../../Components/AddTodo/AddTodo";

function TripDetails() {
  const [trip, setTrip] = useState(null);
  const [todos, setTodos] = useState([]);
  const { tripId } = useParams();

  const storedToken = localStorage.getItem("authToken");
  // fetching trips.
  const fetchTrip = async () => {
    try {
      console.log(tripId);
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/trips/${tripId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setTrip(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrip();
  }, [tripId]);

  // fetching todos.

  const fetchTodos = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_URL}/trips/${tripId}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setTodos(response.data.thingsToDo);
      /* console.log(response.data) */
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodos = (todoId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/thingsTodo/${todoId}`)
      .then(() => fetchTodos());
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="py-3">
      <div >
        {todos.map((todo) => (
          <div className=" mx-4 ">
            <p className=" bg-blue-300 flex justify-between mb-2">
              <li>{todo.todo}</li>
              <button className=" text-slate-200 bg-red-800 px-4" onClick={() => deleteTodos(todo._id)}>delete</button>
            </p>
          </div>
        ))}
      </div>
      <div>
        <AddTodo refreshtodos={fetchTodos} />
      </div>
      <div>
        <Link to="/trips">Back to trips</Link>
      </div>
    </div>
  );
}

export default TripDetails;
