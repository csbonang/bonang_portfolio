
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
        <Button> LinkedIn </Button>
        <Button> GitHub </Button>
        <Button> Instagram </Button>
        </div>
      </div> 
    );
  }
  
  export default Footer;
  