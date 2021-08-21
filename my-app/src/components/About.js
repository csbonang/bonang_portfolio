import React from 'react';
import '../styles/About.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function About() {
  return (
    // <div id="background">
        <article id="background">
                    Hello, my name is Clarisse Bonang, and welcome to my portfolio! 
                    I am an aspiring software engineer. Below you will find my project
                    highlights next to the work section. To open the deployed link 
                    of each project, click on the image. You will also find a title,
                    description, and link to the project's GitHub repository under 
                    the image. Under contact information, links to my email, GitHub,
                    and  LinkedIn page are displayed. I hope you enjoy my website 
                    as much as I had developing it.  
        </article>
    // </div> 
  );
}

export default About;
