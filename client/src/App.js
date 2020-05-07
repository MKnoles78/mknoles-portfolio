import React, { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Home from "./containers/Home"

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <Home/>
    </>
    
  
  );
}

export default App;

