import axios from "axios";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import Trips from "../Trips/Trips";

function Home() {
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  const [urlapi, setUrlapi] = useState([]);

  // fetching data from api
  const fetchUrlapi = async () => {
    try {
      let response = await axios.get(`https://type.fit/api/quotes`);
      let quotesFromApi = response.data;

      let randomQuote =
        quotesFromApi[Math.floor(Math.random() * quotesFromApi.length)];
      setUrlapi(randomQuote);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrlapi();
  }, []);

  return (
    <div>
      <h1> Welcome </h1>

      {/* when the user is not logged in. */}
      {!loggedIn && (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}

      {/*  when the user is logged in. */}
      {loggedIn && (
        <>
          <Link to="/trips">My planned trips</Link>
        </>
      )}

      {urlapi && (
        <div>
          <h3> "{urlapi.text}" </h3>
          <p> Author: {urlapi.author} </p>
        </div>
      )}
    </div>
  );
}

export default Home;
