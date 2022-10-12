import axios from "axios";
import { React, useState } from "react";
import { useParams } from "react-router-dom";

function AddTodo(props) {
  const [todo, setTodo] = useState("");

  const storedToken = localStorage.getItem("authToken");

  const { tripId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { todo, tripId };

    axios
      .post(`${process.env.REACT_APP_API_URL}/thingstodo`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTodo("");

        props.refreshtodos();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="todo">Add To Do!</label> */}
        <button type="submit">+</button>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add todo"
          required
        />
      </form>
    </div>
  );
}

export default AddTodo;
