import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [urlapi, setUrlapi] = useState([]);

  const fetchUrlapi = async () => {
    try {
      let response = await axios.get(`https://type.fit/api/quotes`);
      let quotesFromApi = response.data;

      console.log(response.data);
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
    <div className="home-container">
      <h1 className="home-header"> Welcome to travel diary </h1>
      {urlapi && (
        <div className="home-container-quotes">
          <h3> "{urlapi.text}" </h3>
          <p> Author: {urlapi.author} </p>
        </div>
      )}
    </div>
  );
}

export default Home;
