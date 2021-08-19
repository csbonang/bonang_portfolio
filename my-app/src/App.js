import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from "./components/Header";
// import Section from "./components/Section";
import Navbar from "./components/Navbar";
import About from "./components/About"; 

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Route exact path="/about" component={About} />

      </Router>
    </div>
  );
}

export default App;
