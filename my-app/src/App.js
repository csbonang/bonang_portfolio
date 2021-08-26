import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Header from "./components/Header";
// import Section from "./components/Section";
import Navbar from "./components/Navbar";
import About from "./components/About"; 
import Resume from "./components/Resume"; 
import Contact from "./components/Contact"
import Project from "./components/Project";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Project} />
        <Route exact path="/contactMe" component={Contact} />
        <Route exact path="/bonang_portfolio" component={About} />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
