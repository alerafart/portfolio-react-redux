import React from "react";
import emailjs from '@emailjs/browser';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from "../../actions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
// import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// styles
import "./contact.scss"
//import serviceKeys from "./serviceKeys.js";


function Contact() {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  /* const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }; */

  const contactForm = useSelector((state)=> state.contactForm);
  const dispatch = useDispatch();
  console.log(contactForm);
  // function to change value of the state formContact
  function handleChange(e) {
    const { value } = e.target;
    const { name } = e.target;
    console.log("handlechange fired")
    console.log({name, value});
    dispatch(sendMessage(value, name));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit fired");
    const firstname = contactForm.firstName;
    const lastname = contactForm.lastName;
    // const email = isValidEmail(contactForm.email) ;
    const email = contactForm.email;
    const subject = contactForm.subject;
    const message = contactForm.message;
    // if (contactForm.firstName && contactForm.lastName && isValidEmail && contactForm.message) {
      /* if (firstname && lastname && email && message) {

          const serviceId = `${process.env.REACT_APP_SERVICE_ID}`;
          const templateId = `${process.env.REACT_APP_TEMPLATE_ID}`;
          const userId = `${process.env.REACT_APP_USER_ID}`;

          const templateParams = {
              firstname,
              lastname,
              email,
              subject,
              message
          };
          console.log(templateParams);

          emailjs.send(serviceId, templateId, templateParams, userId)
              .then(response => console.log(response))
              .then(error => console.log(error));
      } else {
          alert('Please fill in all fields.');
      } */
  }

  return (
    <div id="contact" >

      <Box className="contact"
        component="form"
        //action="mailto:maalejandrarafart@gmail.com"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          <div className="contact__fields">            
            <TextField className="contact__fields__field"
              required
              id="filled-required"
              name="firstName"
              value = {contactForm.firstname}
              label="Prénom"
              placeholder="Prénom"
              autoComplete="off"
              variant="filled"
              onChange= {handleChange}
            />

            <TextField className="contact__fields__field"
              //disabled
              //id="filled-disabled"
              required
              id="filled-required"
              name="lastName"
              value = {contactForm.lastName}
              label="Nom"
              placeholder="Nom"
              variant="filled"
              onChange= {handleChange}
            />
            <TextField className="contact__fields__field"
              required
              id="filled-required"
              name="email"
              value = {contactForm.email}
              label="Email"
              placeholder="Email"
              type= "email"
              pattern=".+@globex\.com"
              variant="filled"
              onChange= {handleChange}
            />
            <TextField className="contact__fields__field"
              id="filled-number"
              name="phone"
              value = {contactForm.phone}
              label="Téléphone"
              type="number"
              placeholder="Téléphone"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange= {handleChange}
            />             
          </div>

          <div className="contact__message">
            <TextField
              id="filled-helperText"
              name="subject"
              label=""
              placeholder="Objet"
              value = {contactForm.subject}
              // defaultValue="Default Value"
              helperText="Objet de votre demande"
              variant="filled"
              onChange= {handleChange}
            />
          </div>
          <div className="contact__message">  
            <TextField
              required
              id="outlined-multiline-static"
              name="message"
              value = {contactForm.message}
              label="Message"
              multiline
              onChange= {handleChange}
              //rows={10}
              //defaultValue="Default Value"
            />
          </div>
          <Button className="contact__message--submit" type="submit" variant="contained">Submit</Button>
          
          
          

            <Stack>
              <Alert severity="success"><span className={contactForm.emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span></Alert>
            </Stack>  
      </Box>
    </div>
  );


}
export default Contact;
