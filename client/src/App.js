import React, { useEffect } from "react";
// import logo from "./logo.svg";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.css";
import axios from "axios";
import Home from "./containers/Home";
import Portfolio from "./containers/Portfolio";
import Contact from "./containers/Contact";
import NotFound from "./containers/NotFound";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

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
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/portfolio">
          <Portfolio/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="*">
          <NotFound/>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </>
    
  
  );
}

export default App;

