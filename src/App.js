import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";
import Ingredients from "./components/Ingredients";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Ingredients /> 
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;