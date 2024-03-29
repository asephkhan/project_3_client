import axios from "axios";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
/* import Trips from "../Trips/Trips"; */

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
    <div className=" text-center flex flex-col gap-y-16 ">
      <h1 className=" py-4 text-4xl text-blue-900"> Welcome to <b className=" font-extrabold">TRAVEL PLANNER</b> </h1>

      {/* when the user is not logged in. */}
      {!loggedIn && (
        <div className="flex flex-col px-12 ">
        <p>Already has an account please </p>
        <Link className="no-underline bg-blue-600 py-3 mb-3 text-white text-lg" to="/login">Login</Link>
        <p className="p-2">Don't have an account please </p>
        <Link className="no-underline bg-blue-600 py-3 text-white text-lg" to="/signup">Register</Link>
          
        </div>
      )}

      {/*  when the user is logged in. */}
      {loggedIn && (
        <>
          <Link className="py-10 text-3xl no-underline text-slate-200 border bg-blue-600 flex justify-center align-middle" to="/trips">My planned trips</Link>
        </>
      )}

      {urlapi && (
        <div className='text-lg '>
          <p> "{urlapi.text}" </p>
          <p className=" underline"> <i className=" font-extralight">{urlapi.author}</i> </p>
        </div>
      )}
    </div>
  );
}

export default Home;
