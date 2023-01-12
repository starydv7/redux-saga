import React from "react";
import Home from "./pages/Home";
import Singlepost from "./pages/SinglePost";
import {  Routes, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Navigation />
       
          <Route path="/" exact component={() => <Home />} />
          <Route path="/:id" exact component={() => <Singlepost />} />
        
      </Routes>
    </div>
  );
}

export default App;