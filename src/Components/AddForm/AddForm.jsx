import axios from "axios";
import { React, useState } from "react";

function AddForm(props) {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [days, setDays] = useState("");
  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, place, days };
    console.log("yellow");
    axios
      .post(`${process.env.REACT_APP_API_URL}/trip`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setName("");
        setPlace("");
        setDays("");
        props.refreshtrips();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form className=" flex flex-col gap-2 " onSubmit={handleSubmit}>
        {/* <h3>Add a trip </h3> */}

        {/* <label htmlFor="name">Name</label> */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} placeholder='Name of the trip'
          required
        />

        {/* <label htmlFor="place">Place</label> */}
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required placeholder="location"
        />

       {/*  <label htmlFor="days">Days</label> */}
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required placeholder="number of days"
        />

        <button className=" bg-blue-600 text-slate-200  " type="submit">Add Trip</button>
      </form>
    </div>
  );
}
export default AddForm;
