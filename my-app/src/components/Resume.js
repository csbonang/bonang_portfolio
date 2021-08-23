import React from 'react';
import { Button } from 'semantic-ui-react';
import '../styles/Resume.css';

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

function Resume() {
  return (
        <div className="resume_info"> 

            <h1> <b> Clarisse Bonang </b> </h1>
            <h1> <b>(714) 494 5280 ∙ csgbonang@gmail.com</b> </h1>
            <article> <a> ∙ https://www.linkedin.com/in/clarisse-bonang/ </a> ∙ <a> https://github.com/csbonang </a> ∙ <a> https://csbonang.github.io/bonang_portfolio/ </a> </article>

            <h2><b>TECHNICAL SKILLS </b></h2>                                                                                                                                                                                                                                    
            <p> Programming Languages: React, Node, MongoDB, Express, C++, Java, C#, Python, Swift, Haskell, JavaScript, HTML, CSS, jQuery, Bootstrap, MySQL,
            Software: HSPICE, GitHub, Git,Atom, XCode, PyCharm, Unity, Docker, Microsoft Office
            </p>
            <h2><b>PROJECTS </b></h2>
             <h3> Comics Assembled </h3>
                <p>
                Designed a graphic novel application that allows users to search for their favorite comics and keep track of their progress using Javascript ES6, CSS3, HTML5, and Marvel Comics API. This resulted in a user base of 30 which is fully deployed on Heroku or Github pages.  
                ahuffma2/comics-assembled
                </p>
             <h3>Fit Commit</h3>
                <p>Fit commit is a handy online fitness application that allows a user to track their fitness using Javascript ES6, handlebars, node.js, express to run the server, materialize for the css styling, and sequelize for the database management.
                    mcall0147/fit-commit
                </p>
             <h3>Workout Tracker</h3>
                <p>Workout tracker logs daily workouts and displays a graphical user interface of the user’s progress using Javascript ES6, CSS3, and HTML5. 
                    csbonang/bonang_workoutTracker (github.com)
               </p>
            <h2>PROFESSIONAL EXPERIENCE</h2>                                                                                                                                                       
                <h3>Project Management Intern, USS Cal Builders Engineering Division | Fall 2017 - Spring 2018 </h3>
                <p>Used Computer Aided Design (CAD) system to review blueprints of buildings for construction engineering firm.
                Reviewed contracts for conformance to company standards. 
                </p>

            <h3> Computer Programming and Math, Private Tutor  						              Fall 2018 – present </h3>	
            <p>Tutored Linear Algebra and Java Programming 
            Provided students with study material for both subjects and assisted with their questions
            Strong interpersonal skills working with students to help them succeed
            </p>                                        

            <h2><b> ADDITIONAL RELEVANT EXPERIENCE </b></h2>                                                                                                                                   
            <h3> Vice President, Research & Development Club 					        Winter  2019 – present </h3>
            <h3>Member of Chapman University  Engineering Advisory Panel                                                                                 Fall 2020 - present </h3>
            <h3>Institute of Electrical and Electronics Engineers (IEEE) Member 			      Summer 2020 – present </h3>
            <h3>Society of Women Engineers Committee Planner for International Space Station (ISS) Teleconference 		Fall 2018 
            </h3>
            <h2> EDUCATION  </h2>                                                                                                                                                                                                                                 
            <p> Chapman University, Orange, CA (maybe adding classes that you think is relevant to that job)			           Spring 2022</p>
            <h2>Bachelor of Science, Computer Science       </h2>                                                                                                                                                          
            <h2>Georgia Institute of Technology								       Summer 2021</h2>
            <p>Certificate in Full Stack Development </p>
            <h2>Santiago Canyon Community College    							                       Summer 2019</h2>	
           <p> Associate in Arts, Mathematics   </p>
           <h2> AWARDS </h2>
           <h3>  
               Boeing Leadership Association of Southern California (BLASC) Scholarship Finalist 		  		      Summer 2021
                The BLASC program honors exemplary collegiate leaders who excel in both academics and leadership. 
            </h3>
            <h3>Provost List                                                                                                                                                                                      Fall 2019 – present 
                A list of students honored for their academic excellence by achieving a 3.6 or higher 
            </h3>
            <h3>
                National Society of Collegiate Scholars 								    Summer 2021 – present 
            </h3>
            <h3>
                NASA SUITS (Spacesuit User Interface Technologies for Students) Finalist				    Fall 2019 – Spring 2020
            </h3>
            <h3>
                Programmer & Lead Graphic Designer, NASA SUITS Design Challenge
            Clarisse served as the team’s lead graphical user interface designer and prototyped a spacesuit information display running on the Microsoft Hololens Augmented Reality headset to assist astronauts during extra-vehicular activity on the lunar surface.                                                           
            </h3>
            <h3>
                NASA Community College Aerospace Scholars Certificate of Achievement 				                          Spring 2019
                NASA Community College Aerospace Scholars, Software Engineer
            Clarisse competed in the rover sample return robotics competition at the Johnson Space Center as the team’s software 
            engineer. 
            </h3>
            <div> </div>
        </div>
  );
}

export default Resume;
