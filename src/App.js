// src/App.js
import React from 'react';
import Time from './Time'; // Updated import
import Nav from "./Nav";
import Home from "./Home"
// import "./Time.css"
import "./App.css"
import Loader from "./Loader"
import Memories from "./Memories"
import Wish from "./Wish"
import Batpaki from "./Batpaki"
import Event from "./Event"
import Us from "./Us"


const App = () => {

  const birthday = new Date(2024, 0, 1); 

  return (
    <div className="App">
      {/* <Time birthday={birthday} /> */}
      <Loader/>
      <Nav/>
      <Home/>
      {/* <Wish/> */}
      <Memories/>
      <Batpaki/>
      <Event/>
      <Us/>
    </div>
  );
};

export default App;