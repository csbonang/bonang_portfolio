import React from 'react';
import '../styles/About.css';
import img from '../images/PICTURE.png'; 
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
    <div  id='about'>
        <img src={img} alt="Image" id="img"/>
        <article id="about_info">
        Clarisse Bonang will begin her senior year as a computer science major at Chapman University in the fall semester of 2021. She’s currently completing a summer certificate program in Full Stack Software Development at the Georgia Institute of Technology. Prior to attending Chapman, she earned an Associate in Science degree in mathematics from Santiago Canyon College. At Chapman, she founded and serves as an officer of the Research and Development Club. She and several fellow club members competed in the National Aeronautics and Space Administration (NASA) Spacesuit User Interface Technologies for Students (SUITS) design challenge. Clarisse served as the team’s lead graphical user interface designer and prototyped a spacesuit information display running on the Microsoft Hololens Augmented Reality headset to assist astronauts during extra-vehicular activity on the lunar surface. She also serves on the Engineering Advisory Panel for Chapman’s Fowler School of Engineering and will begin work as a research assistant for a Chapman computer science professor in the fall, helping to investigate innovative ways to improve children’s reading skills. 
While at Santiago Canyon College (SCC), she was selected for the NASA Community College Aerospace Scholars (NCAS) program and competed in the rover sample return robotics competition at the Johnson Space Center.  She also served as an officer in the SCC chapter of the  Society of Women Engineers (SWE) and provided instruction to middle school students in STEM subjects during SCC’s community science night. 
She co-authored the article “Making Computer Science Insanely Great”, on teaching programming to teenagers, published in the July 2015 issue of PragPub magazine, a popular programming journal. 
Clarisse is a leader in her church youth group and also applies her STEM skills to help her church with video production and website development.
Clarisse is a student member of the Institute of Electrical and Electronics Engineers (IEEE). 
She hopes to pursue a career in STEM, either in aerospace or teaching, and would like to intern at Boeing before pursuing a graduate degree.  She is very grateful to the Boeing Leadership Association of Southern California for selecting her as an awardee of the BLASC scholarship. 
        </article>
    </div> 
  );
}

export default About;
