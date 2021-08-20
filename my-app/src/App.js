import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from "./components/Header";
// import Section from "./components/Section";
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Resume from "./components/Resume"; 
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contactMe" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
