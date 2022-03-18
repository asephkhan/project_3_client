import axios from 'axios'; 
import React, { useState, useEffect } from 'react';

function Home() {
const [urlapi, setUrlapi] = useState([]);
  
  
  const fetchUrlapi = async () => {
    try {
  
    let response = await axios.get(`https://type.fit/api/quotes`);
     let quotesFromApi = response.data
      
      console.log(response.data)
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
    <div className='home-container' >
     <h1> Welcome to travel diary </h1>
     {
       urlapi && (
         <div className='home-container-quotes'>
         <h2> {urlapi.text} </h2>
         <h3> {urlapi.author} </h3>
         
         </div>
       )
     }


     
      
     </div>
  )
}

export default Home;