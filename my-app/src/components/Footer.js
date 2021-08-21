
// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s 
// GitHub and LinkedIn profiles, and their profile on a third platform 
// (Stack Overflow, Twitter)
import React from 'react';
import { Button } from 'semantic-ui-react';
import '../styles/Footer.css';


function Footer() {
    return (
      <div className='footer' > 
        <div className='ButtonGroup'>
        <a href='https://www.linkedin.com/in/clarisse-bonang/'><Button> LinkedIn </Button></a>
        <a href='https://github.com/csbonang'><Button> GitHub </Button></a>
        <a href='https://github.com/csbonang'><Button> Instagram </Button></a>
        </div>
      </div> 
    );
  }
  
  export default Footer;
  