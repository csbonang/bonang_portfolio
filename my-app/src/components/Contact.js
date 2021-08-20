import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import '../styles/Contact.css';



// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const SERVICE_ID = "service_qusx09b";
const TEMPLATE_ID = "template_0up8rif";
const USER_ID = "user_lIRfw6kDS4n4vMVSe7VTy";


// We use JSX curly braces to evaluate the style object on the JSX tag


const Contact = () => {
        const handleOnSubmit = (e) => {
          e.preventDefault();
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
              console.log(result.text);
              Swal.fire({
                icon: 'success',
                title: 'Message Sent Successfully'
              })
            }, (error) => {
              console.log(error.text);
              Swal.fire({
                icon: 'error',
                title: 'Ooops, something went wrong',
                text: error.text,
              })
            });
          e.target.reset()
        };
  return (
    <div className='Contact'>
    <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
  );
 }

export default Contact;
